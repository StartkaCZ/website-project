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
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/catalogue","/contact","/catalogue/1","/catalogue/2","/catalogue/3"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
