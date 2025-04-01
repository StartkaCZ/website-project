export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["about-image.jpg","favicon.png","logo.png","placeholder.jpg","styles/global.css"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.G5x4BMzV.js",app:"_app/immutable/entry/app.BNkbn-EF.js",imports:["_app/immutable/entry/start.G5x4BMzV.js","_app/immutable/chunks/GWByIhEs.js","_app/immutable/chunks/kE-QZB2l.js","_app/immutable/chunks/BknhwvsP.js","_app/immutable/entry/app.BNkbn-EF.js","_app/immutable/chunks/kE-QZB2l.js","_app/immutable/chunks/UYFDhDPI.js","_app/immutable/chunks/DugYs-7G.js","_app/immutable/chunks/DLxteN4h.js","_app/immutable/chunks/CnBNY4M3.js","_app/immutable/chunks/B1Cfthdm.js","_app/immutable/chunks/BknhwvsP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/catalogue",
				pattern: /^\/catalogue\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/catalogue/[id]",
				pattern: /^\/catalogue\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
