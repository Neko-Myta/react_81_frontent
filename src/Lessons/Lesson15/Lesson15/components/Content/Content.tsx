import { useContext } from "react";
import Button from "../../../../../components/Button/Button";
import { MainCardContext } from "../MainCard/MainCard";
import { ContentComponent, DataItem } from "./styles";


function Content() {
  // 3 шаг - получить данные из контекста с помощью useContext
  // В вызов хука useContext необходимо передать нужный контекст
  const { data, onDataChange } = useContext(MainCardContext);
  return (
    <ContentComponent>
      <DataItem>First Name: {data?.firstName} </DataItem>
      <DataItem>Last Name: {data?.lastName}</DataItem>
      <DataItem>Age: {data?.age}</DataItem>
      <Button
        name="DELETE"
        onButtonClick={() => {
          onDataChange(undefined);
        }}
      />
    </ContentComponent>
  );
}
export default Content;
