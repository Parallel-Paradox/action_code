import React from "react";
import "./App.css";
import WordTable from "./components/word_table.comp/WordTable";
import {BoxState, BoxType} from "./components/word_box.comp/WordBox";

function App() {
  // TODO-4: Get data from web socket.
  let wordList: string[] = [];
  let boxStateList: BoxState[] = [];
  let boxTypeList: BoxType[] = [];

  for (let i = 0; i < 25; i ++) {
    wordList.push(i.toString());
    boxStateList.push(BoxState.Normal);
    boxTypeList.push(BoxType.White);
  }

  return (
      <WordTable wordList={wordList} boxStateList={boxStateList} boxTypeList={boxTypeList} />
  );
}

export default App;
