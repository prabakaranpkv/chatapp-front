import { Box, Drawer, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";

//Components
import Profile from "./Profile";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#00bfa5",
    height: 97,
    color: "#fff",
    display: "flex",
    "& > *": {
      marginTop: "auto",
      padding: 15,
      fontWeight: 600,
    },
  },
  component: {
    backgroundColor: "#ededed",
    height: "85%",
  },
});

export default function InfoDrawer({ open, setOpen }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    //when click user img open drawer for shows user profile
    <Drawer open={open} onClose={handleClose}>
      <Box className={classes.header}>
        <ArrowBack onClick={() => handleClose()} />
        <Typography>Profile</Typography>
      </Box>
      <Box className={classes.component}>
        <Profile />
      </Box>
    </Drawer>
  );
}
