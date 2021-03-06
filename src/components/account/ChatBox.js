import { useContext } from "react";
import { Dialog, withStyles, Box, makeStyles } from "@material-ui/core";
import { UserContext } from "../context/UserProvider";

//components
import Menu from "../menu/Menu";
import Chat from "../chat/Chat";
import EmptyChat from "../chat/EmptyChat";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    minWidth: 300,
    width: "30%",
  },
  rightComponent: {
    borderLeft: "1px solid rgba(0,0,0,0.14)",
    width: "70%",
    minWidth: 300,
    height: "100%",
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "91%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const ChatBox = ({ classes }) => {
  const className = useStyles();
  const { person } = useContext(UserContext);

  return (
    //chat box design
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={className.component}>
        <Box className={className.leftComponent}>
          <Menu />
        </Box>
        <Box className={className.rightComponent}>
          {Object.keys(person).length ? <Chat /> : <EmptyChat />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
