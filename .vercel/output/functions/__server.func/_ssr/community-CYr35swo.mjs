import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./page-shell-BSFu5CLz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-CYr35swo.js
var import_jsx_runtime = require_jsx_runtime();
var lists = [
	{
		title: "Defensive retail desk",
		author: "desk-notes",
		names: "DG, COST, WMT"
	},
	{
		title: "AI infrastructure",
		author: "chip-watch",
		names: "NVDA, MSFT, GOOGL"
	},
	{
		title: "Consumer platforms",
		author: "flow",
		names: "META, AMZN, NFLX"
	}
];
function Community() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-2 font-serif text-2xl font-semibold",
			children: "Community Watchlists"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted",
			children: "Public lists from other desks. Click a name to open the quote."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: lists.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg border border-line bg-paper-2 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: l.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted",
						children: ["by ", l.author]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 flex flex-wrap gap-2",
						children: l.names.split(", ").map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/asset/$ticker",
							params: { ticker: t },
							className: "rounded-sm bg-paper px-2 py-1 text-sm hover:underline",
							children: ["$", t]
						}, t))
					})
				]
			}, l.title))
		})
	] });
}
//#endregion
export { Community as component };
