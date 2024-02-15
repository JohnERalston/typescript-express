export function MainNav(currentUrl: string) {
  const homeActive = currentUrl === "home" ? "active" : "";
  const oneActive = currentUrl === "one" ? "active" : "";
  const twoActive = currentUrl === "two" ? "active" : "";

  const html = `<ul class="mainNav">
    <a class="nav ${homeActive}" href="/">Home</a>
    <a class="nav ${oneActive}" href="/one">Page One</a>
    <a class="nav ${twoActive}" href="/two">Page Two</a>
</ul>`;
  return { html };
}
