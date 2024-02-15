import { MainNav } from "../components/MainNav";
import "../style.css";

const getData = async () => ({ name: "Mr. Homes", age: 62 });

export async function render() {
  const { name, age } = await getData();
  const html = `<div>
    ${MainNav("home").html}
    <h1>Home</h1>
    <div>Name: ${name}</div>
    <div>Age: ${age}</div>
    <hr />
    <button id="counter"></button>
    </div>`;
  return { html };
}
