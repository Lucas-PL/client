
import "./App.css";

import React from "react";

import ThemeProvider from "react-bootstrap/ThemeProvider";

import "bootstrap/dist/css/bootstrap.min.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {




  return (
    <div className="App">
      <ThemeProvider>

        <Layout />

      </ThemeProvider>
    </div>
  );
}

export default App;
