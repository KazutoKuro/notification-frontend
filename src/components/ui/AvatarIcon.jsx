/* eslint-disable react/prop-types */
import {
  FaUserPlus, // Friend Request
  FaHeart, // Like
  FaComment, // Comment
  FaSignInAlt, // Login
  FaEdit, // Post Update
  FaBirthdayCake, // Birthday
} from "react-icons/fa";

export const AvatarIcon = ({ type }) => {
  return (
    <>
      {/* Sub-Avatar Icon */}
      {type === "FRIEND_REQUEST" && (
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
          <FaUserPlus className="text-white text-xs" />
        </div>
      )}
      {type === "LIKE" && (
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
          <FaHeart className="text-white text-xs" />
        </div>
      )}
      {type === "COMMENT" && (
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
          <FaComment className="text-white text-xs" />
        </div>
      )}
      {type === "LOGIN" && (
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-white">
          <FaSignInAlt className="text-white text-xs" />
        </div>
      )}
      {type === "POST_UPDATE" && (
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center border-2 border-white">
          <FaEdit className="text-white text-xs" />
        </div>
      )}
      {type === "BIRTHDAY" && (
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center border-2 border-white">
          <FaBirthdayCake className="text-white text-xs" />
        </div>
      )}
    </>
  );
};
