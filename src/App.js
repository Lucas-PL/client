import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import RegistrationForm from "./Components/RegistrationForm";
import Trial from "./Components/Trial";
import Menu from "./Components/Menu";
import AccordionMain from "./Components/AccordionMain";
import MainPage from "./Pages/MainPage";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import "bootstrap/dist/css/bootstrap.min.css";

import ButtonUsage from "./Components/ButtonUsage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [zmienna, setZmienna] = useState("brakZmiennej");

  useEffect(() => {
    const hostlink =
      process.env.NODE_ENV == "development"
        ? "http://localhost:4000"
        : "http://www.gastopstorage.com.pl:4000";
    console.log(" to jest hostlink:  ", hostlink);

    fetch(hostlink + "/message", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("To jest dana: ", data);
        setZmienna(data.user);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <ThemeProvider>
        <MainPage />

        {/* <Menu /> */}
        {/* <AccordionMain/> */}
        {/* <ButtonUsage/> */}
        {/* <header className="App-header"> */}
        {/* <RegistrationForm />
         <p>Zmienna to: {zmienna}</p>
         <p>environment data: {process.env.REACT_APP_LOCALHOST}</p>
         <p>The NODE_ENV IS:  {process.env.NODE_ENV}</p>
         <Button />
        <Trial /> */}
        {/* </header> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
