import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./page-shell-BSFu5CLz.mjs";
import { t as PersonalWatchlist } from "./personal-watchlist-C0CniPTB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/create-watchlist-D2PrtnyW.js
var import_jsx_runtime = require_jsx_runtime();
function CreateWatchlist() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-2 text-center font-serif text-2xl font-semibold",
			children: "Create a Watchlist"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto mb-8 max-w-lg text-center text-sm text-muted",
			children: [
				"Names you add stay in this browser.",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/register",
					className: "text-link hover:underline",
					children: "Create an account"
				}),
				" ",
				"to keep them across devices later."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalWatchlist, {})
	] });
}
//#endregion
export { CreateWatchlist as component };
