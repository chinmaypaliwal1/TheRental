'use client'
import { useEffect, useState } from "react";
import HomeSection from "./about/HomeSection";

type User = {
  id: number;
  name: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data); 
          console.log(data);
        }
      });
  }, []);

  return (
    <div>
      <HomeSection />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Users List:</h2>
        <ul className="mt-4 space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 bg-gray-100 rounded shadow">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
