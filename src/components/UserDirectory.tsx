'use client';
import { useState, useEffect } from "react";

import User from "./User/User";
import Filter from "./Filter/Filter";
import { useUserDirectory } from "@/data/userDirectory";

const UserDirectory = () => {

    const [filters, setFilters] = useState(() => {
    const defaultFilters = { limit: 10, page: 1 };

    if (typeof window === "undefined") return defaultFilters;

    const saved = localStorage.getItem("patientFilters");
    if (!saved) return defaultFilters;

    const parsed = JSON.parse(saved);
    // Clean up empty search
    if (parsed.search === "") {
      delete parsed.search;
    }

    return { ...defaultFilters, ...parsed };
  });

  useEffect(() => {
    localStorage.setItem("patientFilters", JSON.stringify(filters));
  }, [filters]);


   const { users, setSearchQuery } = useUserDirectory();

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim());
  };

  return (
    <div className="rounded-xl py-4 sm:p-8 flex flex-col items-center w-full max-w-6xl mx-auto gap-2 sm:gap-5">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">User Directory</h1>
      <div className="flex items-center gap-4">
            <Filter
              onSearch={handleSearch}
            />
          </div>
      <div className="py-4 w-fit flex flex-col gap-4">
        {users.map((user, idx) => (
          <User
            key={user.email}
            fullName={`${user.name.title} ${user.name.first} ${user.name.last}`}
            image={user.picture.medium}
            city={user.location.city}
            country={user.location.country}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};

export default UserDirectory;