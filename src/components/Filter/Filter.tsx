"use client";

import { useState, useCallback, useRef } from "react";
import { SearchBar } from "./Search";

interface FilterProps {
  onSearch?: (query: string) => void;
}

export default function Filter({ onSearch }: FilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  // Debounced search handler
  const handleSearch = useCallback(
    (query: string) => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        onSearch?.(query.trim());
      }, 200); // 200ms debounce
    },
    [onSearch]
  );

  const handleChange = (query: string) => {
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      onSearch?.(searchQuery.trim());
    }
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={handleChange}
        onKeyDown={handleSearchKeyPress}
        searchAction={() => onSearch?.(searchQuery.trim())}
      />
    </div>
  );
}