import React from "react";
import MenuEx from "./components/MenuEx";
import Supreme from "./components/Supreme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <MenuEx />
      <Supreme />
      <Footer />
    </div>
  );
}

export default App;