import WordBox, {BoxState, BoxType} from "../word_box.comp/WordBox";
import {useState} from "react";

export interface Props {
  wordList: string[];
  decryptList: boolean[];
  boxTypeList: BoxType[];
}

// Save the current clicked button. Resolve the event when a new button is clicked.
function WordTable(props: Props) {
  const noClickedWord = -1;
  const [clickedIndex, setClickedIndex] = useState(noClickedWord);

  let clickedCallback: (index: number) => void = (index) => {
    if (index < 0 && index > 25) throw new Error("Wrong index is raised by wordBox.");

    if (clickedIndex === index) {
      setClickedIndex(noClickedWord);
    } else {
      setClickedIndex(index);
    }
  }

  let {wordList, decryptList, boxTypeList} = props;
  if (wordList.length !== 25 || decryptList.length !== 25 || boxTypeList.length !== 25) {
    let error: string = "The number of word table elements has to be exact 25.";
    console.error(error);
    return <div>{error}</div>;
  }

  let lineStarts: number[] = [0, 5, 10, 15, 20];
  return (
      <div>
        {
          lineStarts.map((ptr) => {
            return tableLineBuilder(props, ptr, clickedIndex, clickedCallback);
          })
        } { clickedIndex }
      </div>
  );
}

export default WordTable;


function tableLineBuilder({wordList, decryptList, boxTypeList}: Props, startPtr: number,
                          clickedIndex: number, clickedCallback: (index: number) => void) {
  return (
      <div>
        {
          wordList.slice(startPtr, startPtr + 5).map((word, index) => {
            index = startPtr + index;
            let boxState: BoxState = BoxState.Normal;
            if (decryptList[index]) {
              boxState = BoxState.Decrypt;
            } else if (clickedIndex === index) {
              boxState = BoxState.Clicked;
            }
            return (
                <WordBox
                    index={index} clickedCallback={clickedCallback}
                    word={word} boxState={boxState} boxType={boxTypeList[index]} />
            );
          })
        }
      </div>
  );
}
