/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";

export const NotificationItem = ({ notification, onClick }) => {
  const timeAgo = formatDistanceToNow(new Date(notification.time), {
    addSuffix: true,
  });

  return (
    <div
      className="flex items-center px-4 py-3 hover:bg-gray-100 transition duration-150 cursor-pointer"
      onClick={() => onClick(notification.id)}
    >
      <img
        src={notification.avatar}
        alt="Avatar"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1">
        <p className="text-sm text-gray-800 font-medium">
          {notification.message}
        </p>
        <p className="text-xs text-gray-500">{timeAgo}</p>
      </div>
      {!notification.read && (
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      )}
    </div>
  );
};
