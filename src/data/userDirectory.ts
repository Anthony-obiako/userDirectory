import { useState, useEffect } from "react";

type User = {
  name: { title: string; first: string; last: string };
  email: string;
  location: { city: string; country: string };
  picture: { medium: string };
};

export const useUserDirectory = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const data = await response.json();
      setAllUsers(data.results);
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter users when searchQuery changes
  useEffect(() => {
    if (!searchQuery) {
      setUsers(allUsers);
    } else {
      const q = searchQuery.toLowerCase();
      setUsers(
        allUsers.filter(
          (user) =>
            `${user.name.first} ${user.name.last}`.toLowerCase().includes(q) ||
            user.name.first.toLowerCase().includes(q) ||
            user.name.last.toLowerCase().includes(q)
        )
      );
    }
  }, [searchQuery, allUsers]);

  return {
    searchQuery,
    setSearchQuery,
    users,
    fetchUsers,
  };
};