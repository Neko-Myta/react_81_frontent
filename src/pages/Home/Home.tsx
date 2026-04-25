import { HomePage, PageInfo, Title } from "./styles";
import { useContext } from "react";
import { NameContext } from "../../components/Layuot/NameContext";

function Home(){
    const context = useContext(NameContext);
    return(
        <HomePage>
            <Title>Welcome to the React App</Title>
            <PageInfo>Open lecture example</PageInfo>
            <PageInfo>Home: {context?.name}</PageInfo>
        </HomePage>
    )
}

export default Home