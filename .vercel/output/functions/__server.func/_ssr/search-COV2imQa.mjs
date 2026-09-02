import { o as __toESM } from "../_runtime.mjs";
import { _ as Link, b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./page-shell-BSFu5CLz.mjs";
import { i as formatPrice, t as allAssets } from "./assets-BTZmw5oe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-COV2imQa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		if (!term) return allAssets;
		return allAssets.filter((a) => `${a.ticker} ${a.name} ${a.sector}`.toLowerCase().includes(term));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-4 font-serif text-2xl font-semibold",
			children: "Asset Search"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value: q,
			onChange: (e) => setQ(e.target.value),
			placeholder: "Ticker, name, or sector",
			className: "mb-6 h-11 w-full max-w-lg rounded-md border border-line bg-paper-2 px-3 outline-none focus:ring-2 focus:ring-ink/20",
			autoFocus: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-line overflow-hidden rounded-lg border border-line bg-paper-2",
			children: results.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/asset/$ticker",
				params: { ticker: a.ticker },
				className: "flex items-center justify-between px-4 py-3 hover:bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold",
					children: ["$", a.ticker]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-sm text-muted",
					children: a.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-sm tabular-nums",
					children: formatPrice(a.price)
				})]
			}) }, a.ticker))
		})
	] });
}
//#endregion
export { SearchPage as component };
