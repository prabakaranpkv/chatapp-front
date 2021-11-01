import React, { useContext } from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import { AccountContext } from "./context/AccountProvider";
//components
import Login from "./account/Login";
import ChatBox from "./account/ChatBox";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#DCDCDC",
    height: "90vh",
  },
  loginHeader: {
    height: "100%",
    background: "#00bfa5",
    boxShadow: "none",
  },
  header: {
    height: "100%",
    background: "#128C7E",
    boxShadow: "none",
  },
});

export default function Messenger() {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <Box className={classes.component}>
      <AppBar className={account ? classes.header : classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatBox /> : <Login />}
    </Box>
  );
}
