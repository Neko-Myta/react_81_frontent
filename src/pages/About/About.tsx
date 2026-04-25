import { useContext } from "react";
import { AboutPage, PageInfo, Title } from "./styles";
import { NameContext } from "../../components/Layuot/NameContext";
function About() {
  const context = useContext(NameContext)
  return (
    <AboutPage>
      <Title>About page</Title>
      <PageInfo>About page info</PageInfo>
      <PageInfo>About: {context?.name}</PageInfo>
    </AboutPage>
  );
}
export default About;
