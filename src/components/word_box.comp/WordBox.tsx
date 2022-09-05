import style from "./WordBox.module.css";

export enum BoxState {
  Normal, Clicked, Decrypt,
}

export enum BoxType {
  Red, Blue, Black, White,
}


export interface Props {
  index: number;
  clickedCallback: (index: number) => void;
  word: string;
  boxState: BoxState;
  boxType: BoxType;
}

function WordBox({index, clickedCallback, word, boxState, boxType}: Props) {
  let onClick: ( ) => void = ( ) => { clickedCallback(index); };

  return (
      <button onClick={onClick}>
        <span className={getClassName(boxState, boxType)}>{word}</span>
      </button>
  );
}

export default WordBox;


function getClassName(boxState: BoxState, boxType: BoxType) {
  let className: string = style.button_top;

  className += ' ';
  switch (boxState) {
    case BoxState.Normal: className += style.normal; break;
    case BoxState.Clicked: className += style.clicked; break;
    case BoxState.Decrypt: className += style.decrypt; break;
  }
  if (boxState !== BoxState.Decrypt) return className;

  className += ' ';
  switch (boxType) {
    case BoxType.Red: className += style.red; break;
    case BoxType.Blue: className += style.blue; break;
    case BoxType.Black: className += style.black; break;
    case BoxType.White: className += style.white; break;
  }

  return className;
}
