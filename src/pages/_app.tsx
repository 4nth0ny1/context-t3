import { type AppType } from "next/dist/shared/lib/utils";
import React, { createContext, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import "~/styles/globals.css";

const DarkContext = createContext();

const MyApp: AppType = ({ Component, pageProps }) => {
  const [dark, setDark] = useState(false);

  const darkStyles = {
    test: {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    },
  };

  const handleSetDark = () => {
    setDark(!dark);
  };

  return (
    <DarkContext.Provider value={{ dark, handleSetDark }}>
      <div className="App" style={darkStyles.test}>
        <Navbar DarkContext={DarkContext} />
        <Component {...pageProps} />
      </div>
    </DarkContext.Provider>
  );
};

export default MyApp;
