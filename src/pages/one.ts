import { Request, Response } from "express";
import { MainNav } from "../components/MainNav";
import "../style.css";

const getData = async () => ({ name: "Mike", age: 22 });

export async function render(req: Request, resp: Response) {
  const { name, age } = await getData();
  const html = `<div>
    ${MainNav("one").html}
    <h1>Page One</h1>
    <div>Name: ${name}</div>
    <div>Age: ${age}</div>
    <hr />
    <button id="counter"></button>
    </div>`;
  return { html };
}
