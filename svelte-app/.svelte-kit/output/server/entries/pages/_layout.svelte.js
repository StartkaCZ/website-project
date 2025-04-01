import { d as slot } from "../../chunks/index.js";
import "clsx";
/* empty css                                               */
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = "" + value;
  {
    classname = classname ? classname + " " + hash : hash;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function Header($$payload) {
  $$payload.out += `<header class="svelte-gyqd8p"><div class="logo svelte-gyqd8p"><img src="/logo.png" alt="Website Logo" class="svelte-gyqd8p"> <h1>My Svelte App</h1></div> `;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function Navigation($$payload) {
  let isOpen = false;
  $$payload.out += `<nav class="nav svelte-1rddh6j"><button class="burger svelte-1rddh6j" aria-label="Toggle navigation">☰</button> <ul${attr("class", to_class("", "svelte-1rddh6j", { "open": isOpen }))}><li class="svelte-1rddh6j"><a href="/" class="svelte-1rddh6j">Home</a></li> <li class="svelte-1rddh6j"><a href="/catalogue" class="svelte-1rddh6j">Catalogue</a></li> <li class="svelte-1rddh6j"><a href="/about" class="svelte-1rddh6j">About</a></li> <li class="svelte-1rddh6j"><a href="/contact" class="svelte-1rddh6j">Contact</a></li></ul></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1pp5pxi"><p>© 2025 My Svelte App. All rights reserved.</p></footer>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-1mvzoil"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
