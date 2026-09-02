import { o as __toESM } from "../_runtime.mjs";
import { _ as Link, b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useWatchlist } from "./use-watchlist-BH-HUrlV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/personal-watchlist-C0CniPTB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PersonalWatchlist() {
	const { items, add, remove } = useWatchlist();
	const [asset, setAsset] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		add(asset, notes);
		setAsset("");
		setNotes("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-xl rounded-lg border border-line bg-paper-2 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-center text-base font-semibold",
				children: "My Watchlist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "mb-4 w-full border-collapse text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "bg-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "border border-line px-3 py-2 text-left font-semibold",
								children: "Asset"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "border border-line px-3 py-2 text-left font-semibold",
								children: "Notes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "border border-line px-3 py-2 font-semibold",
								children: "Action"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 3,
						className: "border border-line px-3 py-6 text-center text-muted",
						children: "Nothing saved yet. Add a ticker below."
					}) }) : items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border border-line px-3 py-2 font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/asset/$ticker",
								params: { ticker: item.asset },
								className: "hover:underline",
								children: ["$", item.asset]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border border-line px-3 py-2 text-muted",
							children: item.notes || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border border-line px-3 py-2 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => remove(item.asset),
								className: "rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-bear hover:bg-red-100",
								children: "Remove"
							})
						})
					] }, item.asset)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: asset,
						onChange: (e) => setAsset(e.target.value),
						placeholder: "Asset (e.g. AAPL)",
						className: "h-10 rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: notes,
						onChange: (e) => setNotes(e.target.value),
						placeholder: "Notes",
						className: "h-10 rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "h-10 rounded-md bg-ink text-sm font-medium text-white hover:bg-ink-2",
						children: "Add to Watchlist"
					})
				]
			})
		]
	});
}
//#endregion
export { PersonalWatchlist as t };
