import { e as bind_props, c as pop, p as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { item } = data;
  $$payload.out += `<button class="svelte-8tslqn">← Back to Catalogue</button> <h1>${escape_html(item.title)}</h1> <p>${escape_html(item.description)}</p>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
