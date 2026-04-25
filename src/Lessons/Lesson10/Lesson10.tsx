import Button from "../../components/Button/Button";
import { InputsContainer, Lesson10Wrapper, Result } from "./styles";
import Input from "../../components/Input/Input";
import { useState } from "react";
import type { Todo } from "./type";

function Lesson10() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const onButtonClick = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Lesson10Wrapper>
      <InputsContainer>
        <Input
          type="text"
          name="textInput"
          label="Заметки"
          placeholder="Enter text"
          value={inputValue}
          onChange={onInputChange}
        />
        <Button name="ДОБАВИТЬ" onButtonClick={onButtonClick} />
      </InputsContainer>

      <Result>
        {todos.map((todo, index) => (
          <div key={todo.id}>
            {index + 1}. {todo.text}
          </div>
        ))}
      </Result>
    </Lesson10Wrapper>
  );
}
export default Lesson10;
