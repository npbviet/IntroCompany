import { useState } from "react";

import "./App.css";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import TabList from "./component/TabList";
import SubList from "./component/SubList";
import Standard from "./component/Standard";
import Awesome from "./component/Awesome";
import StyleList from "./component/StyleList";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);
function App() {
  //Save dữ liệu lên firebase

  // async function addMessage(e) {
  //   e.preventDefault();

  //   const newMessage = {
  //     name: e.target.username.value,
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const response = await fetch(
  //     "https://usermessage-d4cf2-default-rtdb.firebaseio.com/message.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(newMessage),
  //     }
  //   );
  //   console.log(await response.json());
  // }
  //Hoàn thành save dữ liệu firebase

  return (
    <>
      <NavBar />
      <Header />
      <TabList />
      <SubList />
      <Standard />
      <Awesome />
      <StyleList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
