import { MainNav } from "../components/MainNav";
import "../style.css";

export function render() {
  const html = `<div>
    ${MainNav("").html}
      <h1>401 - You shouldn't be here!!!!</h1>
      </div>`;
  return { html };
}
