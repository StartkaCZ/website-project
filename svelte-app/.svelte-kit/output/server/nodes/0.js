import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CIz6CMAt.js","_app/immutable/chunks/DLxteN4h.js","_app/immutable/chunks/kE-QZB2l.js","_app/immutable/chunks/CAMdqCzd.js","_app/immutable/chunks/DugYs-7G.js"];
export const stylesheets = ["_app/immutable/assets/0.CXpcNadP.css","_app/immutable/assets/Modal.BZ_Hpf5w.css"];
export const fonts = [];
