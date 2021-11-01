import { useContext, useEffect, useState } from "react";
import { getUsers } from "../service/api";
import { Box, Divider, makeStyles } from "@material-ui/core";

import { AccountContext } from "../context/AccountProvider";
//components
import Conversation from "./Conversation";

const useStyles = makeStyles({
  component: {
    height: "81vh",
    overflow: "overlay",
  },
  divider: {
    margin: "0 0 0 67px",
    backgroundColor: "#F2F2F2",
  },
});

export default function Conversations({ text }) {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  //filtered the user chat
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );

      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);
  return (
    //profile list
    <Box className={classes.component}>
      {users &&
        users.map(
          (user, index) =>
            user.googleId !== account.googleId && (
              <>
                <Conversation user={user} />
                {users.length !== index + 1 && (
                  <Divider className={classes.divider} />
                )}
              </>
            )
        )}
    </Box>
  );
}
