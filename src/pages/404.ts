import { MainNav } from "../components/MainNav";
import "../style.css";

export function render() {
  const html = `<div>
    ${MainNav("").html}
    <h1>404 Not Found</h1>
    </div>`;
  return { html };
}
