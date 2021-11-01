import { useState, useEffect, useContext } from "react";
import { Box } from "@material-ui/core";
import { UserContext } from "../context/UserProvider";
import { AccountContext } from "../context/AccountProvider";
import { getConversation } from "../service/api";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

export default function Chat() {
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  //getting sender and receiver id
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.googleId]);

  return (
    //right side chat box
    <Box>
      <ChatHeader />
      <Messages conversation={conversation} person={person} />
    </Box>
  );
}
