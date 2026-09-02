import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./page-shell-BSFu5CLz.mjs";
import { t as allAssets } from "./assets-BTZmw5oe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rankings-Oy3bRX47.js
var import_jsx_runtime = require_jsx_runtime();
function Rankings() {
	const ranked = [...allAssets].sort((a, b) => b.rank - a.rank);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "mb-6 font-serif text-2xl font-semibold",
		children: "aw.com Rankings"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "overflow-hidden rounded-lg border border-line bg-paper-2",
		children: ranked.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center justify-between border-b border-line px-4 py-3 last:border-b-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-6 text-sm text-muted",
						children: i + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/asset/$ticker",
						params: { ticker: a.ticker },
						className: "font-semibold hover:underline",
						children: ["$", a.ticker]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: a.name
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-sm",
				children: [a.rank, "/100"]
			})]
		}, a.ticker))
	})] });
}
//#endregion
export { Rankings as component };
