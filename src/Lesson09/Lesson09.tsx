import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { InputsContainer, Lesson09Wrapper, Result } from "./styles";
function Lesson09() {
      // Контролируемый компонент - компонент значение которого мы храним в локальном хранилище (state)
  // и изменяем его с помощи функции изменения состояния. Эти значение мы передаём
  // в атрибуты value и onChange в элемент инпут
  const [exampleValue, setExampleValue] = useState<string>("");
  const [result , setResult] = useState<string>("");
  const onButtonClick = () => {
    setResult(exampleValue);
  }
const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExampleValue(event.target.value);
  }

  return (<Lesson09Wrapper>
    <Button name="Send" onButtonClick={onButtonClick}/>
    <Button name="Delete" isDanger={true} />
    <InputsContainer>
    <Input name="example"/>
    <Input name="example2" label="Control" type="password" id="example2" placeholder="Enter value" value={exampleValue} onChange={onInputChange} />
    <Button name = "Send"  onButtonClick={onButtonClick} />
    </InputsContainer>
    <Result>{result}</Result>
  </Lesson09Wrapper>
  )
}
export default Lesson09;