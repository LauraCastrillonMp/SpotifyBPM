"use client";
import { useState } from "react";
import { Input } from "./ui/input";

export function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
      console.log("searching for", event.target.value);
    };

  return (
    <Input
      type="search"
      placeholder="Search"
      className="w-64"
      value={searchValue}
      onChange={handleSearch}
      />
  );
}
