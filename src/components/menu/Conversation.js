import { Box, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { UserContext } from "../context/UserProvider";
import { setConversation } from "../service/api";
const useStyles = makeStyles({
  component: {
    display: "flex",
    height: 40,
    padding: "13px 0",
    cursor: "pointer",
    alignItems: "center",
  },
  displayPicture: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",
  },
  timestamp: {
    fontSize: 12,
    marginLeft: "auto",
    marginRight: 20,
    color: "#00000099",
  },
  text: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
  },
});

export default function Conversation({ user }) {
  const url = user.imageUrl;
  const classes = useStyles();

  const { account } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);

  // const [message, setMessage] = useState({});
  // useEffect(() => {
  //   const getConversationMessage = async () => {
  //     const data = await getConversation({
  //       sender: account.googleId,
  //       receiver: user.googleId,
  //     });
  //     setMessage({ text: data.message, timestamp: data.updatedAt });
  //   };
  //   getConversationMessage();
  // }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  return (
    //profile list
    <Box className={classes.component} onClick={() => getUser()}>
      <Box>
        <img src={url} alt="dp" className={classes.displayPicture} />
      </Box>
      <Box style={{ width: "100%" }}>
        <Box style={{ display: "flex" }}>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
