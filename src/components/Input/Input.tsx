import { InputComponent, Label, InputField, Error } from "./styles";
import type { Inputprops } from "./type";

function Input({
  name,
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  example,
  error,
}: Inputprops) {
  return (
    <InputComponent>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        name={name}
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
      {example && <p>{example}</p>}
      <Error>{error}</Error>
    </InputComponent>
  );
}

export default Input;
