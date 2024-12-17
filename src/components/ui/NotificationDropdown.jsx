/* eslint-disable react/prop-types */
import { NotificationItem } from "./NotificationItem";

export const NotificationDropdown = ({
  onClose,
  onViewAll,
  notifications,
  markAsRead,
  onTabChange,
  activeTab,
}) => (
  <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-10">
    <div className="sticky top-0 px-4 py-2 text-gray-700 font-semibold border-b bg-gray-50 flex justify-between items-center">
      <span>Notifications</span>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
        &times; 
      </button>
    </div>
    <div className="flex justify-around py-2 border-b bg-gray-50">
      <button
        className={`text-sm font-medium ${
          activeTab === "all"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500"
        }`}
        onClick={() => onTabChange("all")}
      >
        All
      </button>
      <button
        className={`text-sm font-medium ${
          activeTab === "unread"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500"
        }`}
        onClick={() => onTabChange("unread")}
      >
        Unread
      </button>
    </div>
    <div className="max-h-80 overflow-y-auto">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onClick={markAsRead}
        />
      ))}
    </div>
    <div className="flex justify-between px-4 py-2 text-sm">
      <button
        onClick={onViewAll}
        className="text-blue-600 hover:underline cursor-pointer"
      >
        View All
      </button>
      <button
        onClick={() => markAsRead("all")}
        className="text-gray-600 hover:underline cursor-pointer"
      >
        Mark all as read
      </button>
    </div>
  </div>
);
