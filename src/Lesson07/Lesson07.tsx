import AnimalCard from "../components/AnimalCard/AnimalCard";
import { animalData } from "./data";
import "./styles.css";
import type { Animaltype } from "./type";

function Lesson07() {
   // Получаем массив JSX элементов на основе массива данных с помощью
  // метода map
  const animalsCards = animalData.map((animal: Animaltype) => {
    return (
      <AnimalCard
      // key={animal.id} - уникальный идентификатор для каждого элемента списка
        name={animal.name}
        species={animal.species}
        img={animal.image}
      />
    );
  });
  return <div className="lesson07-wrapper">{animalsCards}</div>;
}
export default Lesson07;