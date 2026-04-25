// 1 способ - использование обычного css (стили прописываются в отдельном
// файле и добавляются классы в JSX)

import { BoxInfo, Title } from "./styles";
import avatar from "../../assets/avatar.jpg"; // Adjust the path
import avatar1 from "../../assets/avatar1.jpg"; // Adjust the path

import { Text, Image } from "./styles";
import Button from "../../components/Button/Button";
function Lesson08() {
  // Объект стилей для 2 способа
  //  const textStyles = {
  //   color: "blue",
  //   fontSize: "30px",
  //  };
  return (
    <div className="lesson08-wrapper">
      {/* 2 способ - inline стили (переда объекта стилей в атрибут style) */}
      <div style={{ color: "red", fontSize: "24px" }}>
        Inline styles example
      </div>

      <BoxInfo>
        <Text>Emotion example 1</Text>
        <Image src={avatar} />
      </BoxInfo>
      <BoxInfo>
        <Text>Emotion example 2</Text>
        <Title>Lesson 08</Title>
        <Image src={avatar1} />
      </BoxInfo>
      <BoxInfo>
        <Text>Emotion example 2</Text>
      </BoxInfo>
      <Button
        name="Refactor"
        onButtonClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
export default Lesson08;
