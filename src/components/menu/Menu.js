import React, { useState } from "react";

//components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

export default function Menu() {
  const [text, setText] = useState("");
  return (
    <>
      <Header />
      <Search setText={setText} />
      <Conversations text={text} />
    </>
  );
}
