import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

export default function AccountProvider({ children }) {
  const [account, setAccount] = useState();

  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const socket = useRef();

  //socket port
  useEffect(() => {
    socket.current = io("https://chatapp-socket.herokuapp.com");
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        socket,
        setActiveUsers,
        activeUsers,
        newMessageFlag,
        setNewMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
