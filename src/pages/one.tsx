import "@kitajs/html/register";
import { MainNav } from "../components/MainNav";
import "../style.css";

const getData = async () => ({ name: "Mike", age: 22 });

export async function render() {
  const { name, age } = await getData();

  const safeNav = MainNav("one").html;

  const html = (
    <div>
      <div>{safeNav}</div>
      <h1>Page One</h1>
      <div safe>Name: {name}</div>
      <div>Age: {age}</div>
      <hr />
      <button id="counter"></button>
    </div>
  );
  return { html };

  // const html = `<div>
  //   ${MainNav("one").html}
  //   <h1>Page One</h1>
  //   <div>Name: ${name}</div>
  //   <div>Age: ${age}</div>
  //   <hr />
  //   <button id="counter"></button>
  //   </div>`;
  // return { html };
}
