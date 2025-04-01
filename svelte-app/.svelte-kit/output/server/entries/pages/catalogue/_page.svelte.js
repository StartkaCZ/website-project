import { f as ensure_array_like, c as pop, p as push } from "../../../chunks/index.js";
import { c as catalogue } from "../../../chunks/catalogue.js";
import "../../../chunks/client.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(catalogue);
  $$payload.out += `<h1>Catalogue</h1> <div class="grid svelte-167g6s5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<button class="card svelte-167g6s5"><h2>${escape_html(item.title)}</h2></button>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
