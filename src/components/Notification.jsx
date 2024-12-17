import { useState, useEffect } from "react";
import { NotificationItem } from "./ui/NotificationItem";
import { NotificationDropdown } from "./ui/NotificationDropdown";
import { useGetAllNotifications } from "../hooks/notificationHooks";
import { FaBell } from "react-icons/fa"; // Import the notification bell icon

const Notification = () => {
  // hooks
  const {
    data: notiData,
    error: getError,
    loading: getLoading,
    fetchData,
  } = useGetAllNotifications();

  // state
  const [isOpen, setIsOpen] = useState(false);
  const [allNotifications, setNotifications] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchData(); // The hook will handle errors and loading
  }, [fetchData]);

  useEffect(() => {
    if (notiData) {
      setNotifications(notiData);
    }
  }, [notiData]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        id === "all"
          ? { ...notification, read: true }
          : notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const unreadCount = allNotifications.filter((n) => !n.read).length;

  const filteredNotifications =
    activeTab === "unread"
      ? allNotifications.filter((n) => !n.read)
      : allNotifications;

  return (
    <div className="relative">
      <nav className="sticky top-0 bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative p-2 text-gray-700 hover:text-blue-500"
        >
          <FaBell />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {unreadCount}
            </span>
          )}
        </button>
      </nav>
      {getLoading && <p>Loading items...</p>}
      {getError && <p className="text-red-500">Error: {getError}</p>}
      {isOpen && (
        <NotificationDropdown
          onClose={() => setIsOpen(false)}
          onViewAll={() => setIsExpanded((prev) => !prev)}
          notifications={filteredNotifications}
          markAsRead={markAsRead}
          onTabChange={setActiveTab}
          activeTab={activeTab}
        />
      )}
      {isExpanded && (
        <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-10 max-h-[1000px]">
          <div className="sticky top-0 px-4 py-2 text-gray-700 font-semibold border-b bg-gray-50 flex justify-between items-center">
            <h2 className="text-lg">All Notifications</h2>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
          <div className="max-h-[450px] overflow-y-auto">
            {allNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onClick={markAsRead}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
