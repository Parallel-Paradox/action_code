import style from "./WordBox.module.css";
import {useState} from "react";

export enum BoxState {
  Encrypt, Clicked, Decrypt,
}

export enum BoxType {
  Red, Blue, Black, White,
}


export interface Props {
  word: string;
  isDecrypt: boolean;
  boxType: BoxType;
}

function WordBox({word, isDecrypt, boxType}: Props) {
  const [boxState, setBoxState] = useState(BoxState.Encrypt);

  let onClick: ( ) => void = ( ) => { setBoxState(getNextStateWhenClick(boxState)); };
  if (isDecrypt) {
    setBoxState(BoxState.Decrypt);
  } else if (boxState === BoxState.Decrypt) {
    setBoxState(BoxState.Encrypt);
  }

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
    case BoxState.Encrypt: className += style.encrypt; break;
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

function getNextStateWhenClick(currentState: BoxState) {
  let nextState: BoxState;
  switch (currentState) {
    case BoxState.Encrypt: nextState = BoxState.Clicked; break;
    case BoxState.Clicked: nextState = BoxState.Encrypt; break;
    case BoxState.Decrypt: nextState = BoxState.Decrypt; break;
  }

  return nextState;
}
