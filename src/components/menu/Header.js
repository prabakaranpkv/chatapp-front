import { Box, makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { AccountContext } from "../context/AccountProvider";

//components
import HeaderMenu from "./HeaderMenu";
import Drawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 37,
    width: 37,
    padding: 10,
    borderRadius: "50%",
  },
  icons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
});
export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setOpen(true);
  };

  return (
    //selected user chatbox
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          onClick={() => toggleDrawer()}
          alt="dp"
          className={classes.avatar}
        />
        {account.name}
        <Box className={classes.icons}>
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}
