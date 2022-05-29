import React from "react";
import Navbar from "./components/Navbar";
import  "./components/style.css";

const AnimePicture = new URL("./assets/anime.jpg",import.meta.url)
function App() {
  return (
    <div>
      <Navbar />
      <img src={AnimePicture}/>
      </div>
  );
}

export default App;