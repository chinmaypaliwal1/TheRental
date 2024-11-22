'use client'
import { useEffect, useState } from "react";
import HomeSection from "./about/HomeSection";

export default function Home() {
  const [users, setUsers] = useState([]);

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
    </div>
  );
}
