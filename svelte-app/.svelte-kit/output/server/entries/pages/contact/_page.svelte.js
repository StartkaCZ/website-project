import { e as bind_props, h as copy_payload, i as assign_payload, c as pop, p as push } from "../../../chunks/index.js";
/* empty css                                                  */
import { f as fallback } from "../../../chunks/utils.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Modal($$payload, $$props) {
  let isOpen = fallback($$props["isOpen"], false);
  let title = fallback($$props["title"], "Modal Title");
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="modal-overlay svelte-12fmixh"><div class="modal-content svelte-12fmixh"><h2>${escape_html(title)}</h2> <p>This is a modal window with transitions.</p> <button class="svelte-12fmixh">Close</button></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { isOpen, title });
}
function _page($$payload, $$props) {
  push();
  let showModal = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<h1 class="svelte-8py7z5">Contact Us</h1> <p class="svelte-8py7z5">Get in touch via email at <a href="mailto:info@example.com" class="svelte-8py7z5">info@example.com</a>.</p> <button>Open Modal</button> `;
    Modal($$payload2, {
      title: "Welcome!",
      get isOpen() {
        return showModal;
      },
      set isOpen($$value) {
        showModal = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
