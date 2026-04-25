import { Link } from "react-router-dom";
import { LessonsItems, LessonsPage, PageInfo, Title } from "./styles";

function Lessons() {
  return (
    <LessonsPage>
      <Title>Lessons page</Title>
      <PageInfo>Info lessons </PageInfo>
      <LessonsItems>
        <Link to="/lesson07">Lesson07</Link>
        <PageInfo>JSX, map and key</PageInfo>
        <Link to="/lesson08">Lesson08</Link>
        <PageInfo>Styles</PageInfo>
        <Link to="/lesson09">Lesson09</Link>
        <PageInfo>Button and input</PageInfo>
        <Link to="/lesson10">Lesson10</Link>
        <PageInfo></PageInfo>
        <Link to="/lesson11">Lesson11</Link>
        <PageInfo></PageInfo>
        <Link to="/lesson12">Lesson12</Link>
        <PageInfo>Projekt</PageInfo>
        <Link to="/lesson12_Olena">Lesson12_Olena</Link>
        <PageInfo>Porojekt Olena</PageInfo>
        <Link to="/lesson15">Lesoon15</Link>

      </LessonsItems>
    </LessonsPage>
  );
}

export default Lessons;
