
import Button from "../../components/Button/Button";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Lesson11Wrapper } from "./styles";
function Lesson11() {
  return (
    <Lesson11Wrapper>
      <LoginForm />
            <Button name="LOGIN" type="submit" />
    </Lesson11Wrapper>
  );
}
export default Lesson11;