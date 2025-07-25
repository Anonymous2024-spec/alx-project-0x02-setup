import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address,
  }));

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;
