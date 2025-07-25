import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city} - {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
