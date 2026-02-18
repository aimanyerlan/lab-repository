import React, { useState } from "react";
import type { User } from "./types";

const INITIAL_DATA: User[] = [
  { name: "Aiman", email: "aiman@gmail.com", age: 24 },
  { name: "Alima", email: "alima@gmail.com", age: 20 },
  { name: "Ulzhan", email: "ulzhan@gmail.com", age: 18 },
  { name: "Jasmin", email: "jasmin@gmail.com", age: 19 },
  { name: "Aruzhan", email: "aruzhan@gmail.com", age: 21 }
];

const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] =
    useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);

    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

    const handleClear = () => {
    setSearchTerm("");
    setFilteredUsers(users);
    };


  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name"
      />
      <button onClick={handleClear}>Clear</button>

      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchApp;
