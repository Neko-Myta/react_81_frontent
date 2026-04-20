// Шаг 1 - импорт хука из библиотеки React;
import { useState } from "react";
import { CounterWrapper, CounterValue } from "./styles";
import Button from "../Button/Button";



function Counter() {
  // type ArrayType<T> = T[];
  // numbers:ArrayType<number>  = [3, 4, 5] --> number[]
  const [counter, setCounter] = useState < number > (0);


  const onCounterMinus = () => {
    setCounter((prevState) => prevState - 1);
  };
  const onCounterPlus = () => {
    setCounter((prevState) => prevState + 1);
  };

  const onCounterClear = () => {
    setCounter(0);
  };

  return (
    <CounterWrapper>
      <div className="button-wrapper">
        <Button name="-" onButtonClick={onCounterMinus} />
      </div>
      <CounterValue>{counter}</CounterValue>
      <div className="button-wrapper">
        <Button name="+" onButtonClick={onCounterPlus} />
      </div>
      <div className="button-wrapper">
        <Button name="Clear" onButtonClick={onCounterClear} />
      </div>
    </CounterWrapper>
  );
}

export default Counter;
