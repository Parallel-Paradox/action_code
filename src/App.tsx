import React from "react";
import "./App.css";
import WordTable from "./components/word_table.comp/WordTable";
import {BoxType} from "./components/word_box.comp/WordBox";

function App() {
  // TODO-4: Get data from web socket.
  let wordList: string[] = [];
  let decryptList: boolean[] = [];
  let boxTypeList: BoxType[] = [];

  for (let i = 0; i < 25; i ++) {
    wordList.push(i.toString());
    decryptList.push(false);
    boxTypeList.push(BoxType.White);
  }

  return (
      <WordTable wordList={wordList} decryptList={decryptList} boxTypeList={boxTypeList} />
  );
}

export default App;
