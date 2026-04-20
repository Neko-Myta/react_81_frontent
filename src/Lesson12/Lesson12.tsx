import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import type { Employee } from "./type";
import {
  Lesson12Wrapper,
  InputConteiner,
  Result,
  ContentWrapper,
} from "./styles";
import { useState } from "react";
import { Title } from "../Lesson08/styles";
function Lesson12() {
  const [empoloyee, setEmployee] = useState<Employee[]>([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    surname: "",
    age: "",
    job: "",
  });
  const onButtonClick = () => {
    if (
      inputValue.name.trim() === "" ||
      inputValue.surname.trim() === "" ||
      inputValue.age.trim() === ""
    )
      return;

    const newEmployee: Employee = {
      id: Date.now().toString(),
      text: `${inputValue.name}, ${inputValue.surname}, ${inputValue.age}, ${
        inputValue.job ? ` ${inputValue.job}` : ""
      }`,
    };
    setEmployee([...empoloyee, newEmployee]);
    setInputValue({
      name: "",
      surname: "",
      age: "",
      job: "",
    });
  };
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Lesson12Wrapper>
      <ContentWrapper>
        <InputConteiner>
          <Title>Create Employee</Title>

          <Input
            type="text"
            name="name"
            label="Name*"
            placeholder="Enter name"
            value={inputValue.name}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="surname"
            label="Surname*"
            placeholder="Enter suname"
            value={inputValue.surname}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="age"
            label="Age*"
            placeholder="Enter age"
            value={inputValue.age}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="job"
            label="Job Position"
            placeholder="Enter job"
            value={inputValue.job}
            onChange={onInputChange}
          />

          <Button name="ДОБАВИТЬ" onButtonClick={onButtonClick} />
        </InputConteiner>

        {empoloyee.length > 0 && (
          <Result>
            {empoloyee.map((employees) => (
              <div key={employees.id}>{employees.text}</div>
            ))}
          </Result>
        )}
      </ContentWrapper>
    </Lesson12Wrapper>
  );
}

export default Lesson12;
