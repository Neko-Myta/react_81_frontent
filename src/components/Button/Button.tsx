// Упрощенный импорт для стилей
import { MyButton } from "./styles";

import type { ButtonProps } from "./types";

function Button({ name, type = "button", onButtonClick = () => {}, isDanger = false }: ButtonProps) {
  // Вся дополнительная логика (создание переменных, выражения, функции и т.д.)
  // прописывается внутри тела компонента ДО return
  // const isMainName = false;
  // const buttonName = isMainName ? "Main Button" : "Butto
  
  return (
    <MyButton type={type} onClick={onButtonClick} isDanger={isDanger}>
      {name}
    </MyButton>

  );
}

// Чтобы мы могли использовать компонент (вызвать) в других компонентах
// его сначала нужно экспортировать. Для компонентов используется экспорт по умолчанию
export default Button;
