import WordBox, {BoxType} from "../word_box.comp/WordBox";

export interface Props {
  wordList: string[];
  decryptList: boolean[];
  boxTypeList: BoxType[];
}

function WordTable(props: Props) {
  let {wordList, decryptList, boxTypeList} = props;
  if (wordList.length !== 25 || decryptList.length !== 25 || boxTypeList.length !== 25) {
    let error: string = "The number of word table elements has to be exact 25.";
    console.error(error);
    return <div>{error}</div>;
  }

  let lineStarts: number[] = [0, 5, 10, 15, 20];
  return (
      <div> { lineStarts.map((ptr) => { return tableLineBuilder(props, ptr); }) } </div>
  );
}

export default WordTable;


function tableLineBuilder({wordList, decryptList, boxTypeList}: Props, startPtr: number) {
  return (
      <div>
        {
          wordList.slice(startPtr, startPtr + 5).map((word, index) => {
            return (
                <WordBox word={word} isDecrypt={decryptList[index]} boxType={boxTypeList[index]} />
            );
          })
        }
      </div>
  );
}
