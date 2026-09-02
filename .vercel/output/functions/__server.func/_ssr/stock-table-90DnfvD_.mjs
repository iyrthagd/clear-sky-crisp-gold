import { o as __toESM } from "../_runtime.mjs";
import { _ as Link, b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as formatPrice } from "./assets-BTZmw5oe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stock-table-90DnfvD_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StockTable({ title, assets, showSearch = true }) {
	const [q, setQ] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		if (!term) return assets;
		return assets.filter((a) => `${a.ticker} ${a.name} ${a.expectedMove} ${a.timeHorizon}`.toLowerCase().includes(term));
	}, [assets, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [showSearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 flex justify-start",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: "list-search",
			value: q,
			onChange: (e) => setQ(e.target.value),
			placeholder: "Search this list…",
			className: "h-10 w-full max-w-xs rounded-md border border-line bg-paper-2 px-3 text-sm outline-none ring-ink/20 placeholder:text-muted focus:ring-2"
		})
	}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-lg border border-line bg-paper-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[760px] border-collapse text-center text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("thead", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-24 border-none bg-paper-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				colSpan: 6,
				className: "border-b-2 border-line-strong px-3 py-4 text-base font-semibold tracking-tight",
				children: title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "bg-paper text-[11px] uppercase tracking-wide text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b-2 border-r-2 border-line-strong px-3 py-3 font-semibold text-fg",
						children: "Asset"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b-2 border-r border-line-strong px-3 py-3 font-semibold text-fg",
						children: "Price"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b-2 border-r border-line-strong px-3 py-3 font-semibold text-fg",
						children: "Expected Move"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b-2 border-r border-line-strong px-3 py-3 font-semibold text-fg",
						children: "Time Horizon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b-2 border-r border-line-strong px-3 py-3 font-semibold text-fg",
						children: "52W Range"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b-2 border-r border-line-strong px-3 py-3 font-semibold text-fg",
						children: "aw.com Estimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b-2 border-line-strong px-3 py-3 font-semibold text-fg",
						children: "aw.com Rank"
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [rows.map((a, i) => {
				const bottom = i === rows.length - 1 ? "border-b-2 border-line-strong" : "border-b border-line";
				const moveClass = a.expectedMove === "Bullish" ? "text-bull" : "text-bear";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "hover:bg-paper/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: `${bottom} border-r-2 border-line-strong px-3 py-3 font-semibold`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/asset/$ticker",
								params: { ticker: a.ticker },
								className: "block hover:underline",
								children: ["$", a.ticker]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: `${bottom} border-r border-line px-3 py-3 font-mono tabular-nums`,
							children: formatPrice(a.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: `${bottom} border-r border-line px-3 py-3 ${moveClass}`,
							children: a.expectedMove
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: `${bottom} border-r border-line px-3 py-3`,
							children: a.timeHorizon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: `${bottom} border-r border-line px-3 py-3 font-mono tabular-nums`,
							children: a.range52w
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: `${bottom} border-r border-line px-3 py-3`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/asset/$ticker",
								params: { ticker: a.ticker },
								search: { section: "estimate" },
								className: "block text-link hover:underline",
								children: a.estimate
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: `${bottom} px-3 py-3`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/asset/$ticker",
								params: { ticker: a.ticker },
								search: { section: "rank" },
								className: "block text-link hover:underline",
								children: [a.rank, "/100"]
							})
						})
					]
				}, a.ticker);
			}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 7,
				className: "px-3 py-10 text-muted",
				children: "No assets match that search."
			}) }) : null] })]
		})
	})] });
}
//#endregion
export { StockTable as t };
