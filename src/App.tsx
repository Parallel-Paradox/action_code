import React from "react";
import "./App.css";
import WordBox, {BoxType} from "./components/word_box.comp/WordBox";

function App() {
  return (
      <WordBox word={"Hello, World!"} isDecrypt={false} boxType={BoxType.White} />
  );
}

export default App;
