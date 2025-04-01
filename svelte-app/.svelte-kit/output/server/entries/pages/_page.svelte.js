import "clsx";
import { e as bind_props, c as pop, p as push } from "../../chunks/index.js";
/* empty css                                               */
import { f as fallback } from "../../chunks/utils.js";
import { e as escape_html } from "../../chunks/escaping.js";
function Card($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "Card Title");
  let description = fallback($$props["description"], "This is a brief description of the card.");
  $$payload.out += `<div class="card svelte-y6dtzz"><img src="/placeholder.jpg" alt="Placeholder" class="svelte-y6dtzz"> <div class="content svelte-y6dtzz"><h2 class="svelte-y6dtzz">${escape_html(title)}</h2> <p class="svelte-y6dtzz">${escape_html(description.substring(0, 10) + "...")}</p> <button class="svelte-y6dtzz">${escape_html("Read More")}</button></div></div>`;
  bind_props($$props, { title, description });
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<h1>Welcome to My Svelte App</h1> <p>This is the homepage of our SvelteKit application.</p> <div class="gallery svelte-180e7el">`;
  Card($$payload, {
    title: "Card 1",
    description: "This is the first card."
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Card 2",
    description: "This is the second card."
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Card 3",
    description: "This is the third card."
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Card 4",
    description: "This is the fourth card."
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Card 5",
    description: "This is the fifth card."
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Card 6",
    description: "This is the sixth card."
  });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
