import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [person, setPerson] = useState({});
  return (
    <UserContext.Provider
      value={{
        person,
        setPerson,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
