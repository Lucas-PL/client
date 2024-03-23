import MainTitle from "../Components/MainTitle";
import React, { useState } from "react";
import AccordionMobile from "../Components/AccordionMobile";

export default function About() {
  return (
    <>
      <div className="App">
        <MainTitle
          titleOne="Our"
          titleTwo="History"
          text="We believe that the idea supported by passion, work, and engagement give a result in the form of a refined product, satisfaction and user safety."
        />
      </div>

      <AccordionMobile />
    </>
  );
}
