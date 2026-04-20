import { Homework04Wrapper } from "./styled";

function Homework04() {
  return (
    <Homework04Wrapper>
      <h2>Задание 1</h2>
      {/*let isAdmin: boolean = true;
console.log("isAdmin:", isAdmin);*/}
      <h2>Задание 2</h2>
      {/*let x: number = 7, y: number = 5;
let sum: number = x + y;
console.log("sum:", sum);*/}
      <h2>Задание 3</h2>
      {/*const PI: number = 3.14;
console.log("PI:", PI);*/}
      <h2>Задание 4</h2>
      {/*let a: number = 10, b: number = 3;
let diff: number = a - b;
console.log("diff:", diff);*/}
      <h2>Задание 5</h2>
      {/*let direction: "left" | "right";
direction = "left";
console.log(direction);

direction = "right";
console.log(direction);*/}
      <h2>Задание 6</h2>
      {/*let userTuple: [string, number] = ["Anna", 20];
console.log("userTuple:", userTuple[0] + ",", userTuple[1]);*/}
      <h2>Задание 7</h2>
      {/*let scores: number[] = [10, 20, 30];
console.log(scores[1]);*/}
      <h2>Задание 8</h2>
      {/*let langs: string[] = ["TS", "JS", "HTML"];
console.log(langs.join("-"));*/}
      <h2>Задание 9</h2>
      {/*
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 2, y: 5 };
console.log("Point:", point.x, point.y);*/}
      <h2>Задание 10</h2>
      {/*interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "Bob", age: 30 };
console.log(person);*/}
      <h2>Задание 11</h2>
      {/*interface Contact {
  name: string;
  phone?: string;
}

let c1: Contact = { name: "Alice", phone: "12345" };
let c2: Contact = { name: "Tom" };

console.log(c1.phone ? c1.phone : "no-phone");
console.log(c2.phone ? c2.phone : "no-phone");*/}
      <h2>Задание 12</h2>
      {/*interface BaseEntity {
  id: number;
}

interface UserEntity extends BaseEntity {
  username: string;
}

let user: UserEntity = { id: 1, username: "neo" };
console.log(user);*/}
      <h2>Задание 13</h2>
      {/*function subtract(a: number, b: number): number {
  return a - b;
}

console.log(subtract(10, 4));*/}
      <h2>Задание 14</h2>
      {/*function makeTitle(text: string): string {
  return `Title: ${text}`;
}

console.log(makeTitle("News"));*/}
      <h2>Задание 15</h2>
      {/*function printHello(): void {
  console.log("Hello!");
}

printHello();*/}
      <h2>Задание 16</h2>
      {/*function formatId(id: number | string): string {
  return `ID=${id}`;
}

console.log(formatId(10));
console.log(formatId("A1"));*/}
      <h2>Задание 17</h2>
      {/*type Comparer = (a: number, b: number) => boolean;

const isGreater: Comparer = (a, b) => a > b;

console.log(isGreater(5, 3));*/}
      <h2>Задание 18</h2>
      {/*type Item = {
  name: string;
  price: number;
};
let items: Item[] = [
  { name: "Item1", price: 10 },
  { name: "Item2", price: 20 }
];
console.log(items[1].price);*/}
      <h2>Задание 19</h2>
      {/*let date = new Date("2025-01-15");
console.log(date.getFullYear());*/}
      <h2>Задание 20</h2>
      {/*function introduce(name: string, age?: number): string {
  return age !== undefined
    ? `Name=${name}, Age=${age}`
    : `Name=${name}`;
}

console.log(introduce("Alice", 25));
console.log(introduce("Bob"));*/}
    </Homework04Wrapper>
  );
}

export default Homework04;
