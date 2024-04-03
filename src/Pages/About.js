import MainTitle from "../Components/MainTitle";
import React, { useState } from "react";
import AccordionMobile from "../Components/AccordionMobile";


export default function About() {
  return (
    <>
      <div className="App">
        <MainTitle
          titleOne="Wifi"
          titleTwo=" - Remote setup"
          text="Remote access to the configuration panel makes it easy and effective to setup and configure the device parameters with your mobile."
        />
      </div>

      <AccordionMobile />
    </>
  );
}
