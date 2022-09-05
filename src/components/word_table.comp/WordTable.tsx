import WordBox, {BoxState, BoxType} from "../word_box.comp/WordBox";
import {useState} from "react";

export interface Props {
  wordList: string[];
  boxStateList: BoxState[];
  boxTypeList: BoxType[];
}

// Save the current clicked button. Resolve the event when a new button is clicked.
function WordTable(props: Props) {
  const noClickedWord = -1;
  const [clickedIndex, setClickedIndex] = useState(noClickedWord);

  let clickedCallback: (index: number) => void = (index) => {
    if (index < 0 && index > 25) throw new Error("Wrong index is raised by wordBox.");
    if (props.boxStateList[index] === BoxState.Decrypt) return;

    // Can't extract `BoxState.Normal` assignment because the rage of clickedIndex is unchecked.
    if (clickedIndex === index) {
      setClickedIndex(noClickedWord);
      props.boxStateList[clickedIndex] = BoxState.Normal;
    }
    else if (clickedIndex !== noClickedWord) {
      setClickedIndex(index);
      props.boxStateList[clickedIndex] = BoxState.Normal;
      props.boxStateList[index] = BoxState.Clicked;
    }
  }

  let {wordList, boxStateList, boxTypeList} = props;
  if (wordList.length !== 25 || boxStateList.length !== 25 || boxTypeList.length !== 25) {
    let error: string = "The number of word table elements has to be exact 25.";
    console.error(error);
    return <div>{error}</div>;
  }

  let lineStarts: number[] = [0, 5, 10, 15, 20];
  return (
      <div>
        {
          lineStarts.map((ptr) => { return tableLineBuilder(props, ptr, clickedCallback); })
        }
      </div>
  );
}

export default WordTable;


function tableLineBuilder({wordList, boxStateList, boxTypeList}: Props, startPtr: number,
                          clickedCallback: (index: number) => void) {
  return (
      <div>
        {
          wordList.slice(startPtr, startPtr + 5).map((word, index) => {
            return (
                <WordBox
                    index={index} clickedCallback={clickedCallback}
                    word={word} boxState={boxStateList[index]} boxType={boxTypeList[index]} />
            );
          })
        }
      </div>
  );
}
