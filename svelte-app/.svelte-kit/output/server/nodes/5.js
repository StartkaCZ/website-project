import * as universal from '../entries/pages/catalogue/_id_/_page.js';
import * as server from '../entries/pages/catalogue/_id_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/catalogue/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/catalogue/[id]/+page.js";
export { server };
export const server_id = "src/routes/catalogue/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.9IbZ8VSo.js","_app/immutable/chunks/BzVoC9xU.js","_app/immutable/chunks/DLxteN4h.js","_app/immutable/chunks/kE-QZB2l.js","_app/immutable/chunks/CAMdqCzd.js","_app/immutable/chunks/UYFDhDPI.js","_app/immutable/chunks/DugYs-7G.js","_app/immutable/chunks/CSsP8XV_.js","_app/immutable/chunks/B1Cfthdm.js","_app/immutable/chunks/GWByIhEs.js","_app/immutable/chunks/BknhwvsP.js"];
export const stylesheets = ["_app/immutable/assets/5.BZ99kqVc.css"];
export const fonts = [];
