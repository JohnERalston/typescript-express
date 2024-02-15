import { MainNav } from "../components/MainNav";
import "../style.css";

const getData = async () => ({ name: "John", age: 30 });

export async function render() {
  const { name, age } = await getData();
  const html = `<div>
    ${MainNav("two").html}
    <h1>Page Two</h1>
    <div>Name: ${name}</div>
    <div>Age: ${age}</div>
    <hr />
    <button id="counter"></button>
    </div>`;

  return { html };
}
