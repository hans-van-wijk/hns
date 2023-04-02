export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","home-bg-NV2HXGUL.mp4","homepage_animation-6OK5OEAX.mp4","homepage_customize_graphic-ETGVKACY.png","homepage_link_graphic-7TX75NQ6.png","image sha3 b8e1eff7baa4de104c515b32afc31e8cc020b22cbd5868815a31b40fc5bccb87.webp","image sha3 d3df4d9c6acb9d7ccddb8b9bac1d701ee024ecf83d0dc5d075bffa5de45fcd2a.jpg","image sha3 e6341641bed1ccfb9414d6ed24fba1bcbec2866fb2ff5b1dd129cc2619a92f61.jpg","image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg","video sha3 26475032a354250d681f504a0a56a21ab4c9b4871a8f80aabf80550c59ed594d.mp4","video sha3 eb4187122b7ec6def2b8ffbf0e05ef71d88fa1751d1302a634c7af8b0a3709b6.mp4"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.20cfb74a.js","imports":["_app/immutable/entry/start.20cfb74a.js","_app/immutable/chunks/index.46b61105.js","_app/immutable/chunks/singletons.11322c03.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7ae94247.js","imports":["_app/immutable/entry/app.7ae94247.js","_app/immutable/chunks/index.46b61105.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/landing-a",
				pattern: /^\/landing-a\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/styleguide",
				pattern: /^\/styleguide\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/templates",
				pattern: /^\/templates\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
