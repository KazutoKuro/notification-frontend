/* eslint-disable react/prop-types */
import { timeAgo } from "../../utils/utils";
import { AvatarIcon } from "./AvatarIcon";

export const NotificationItem = ({ notification, onClick }) => {
  return (
    <div
      className="flex items-center px-4 py-3 hover:bg-gray-100 transition duration-150 cursor-pointer"
      onClick={() => onClick(notification.id)}
    >
      {/* Avatar with Sub-Icon */}
      <div className="relative">
        <img
          src={notification.avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <AvatarIcon type={notification.type} />
      </div>

      {/* Notification Content */}
      <div className="flex-1 ml-3">
        <p className="text-sm text-gray-800 font-medium">
          {notification.message}
        </p>
        <p className="text-xs text-gray-500">{timeAgo(notification.time)}</p>
      </div>

      {/* Unread Indicator */}
      {!notification.read && (
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      )}
    </div>
  );
};
