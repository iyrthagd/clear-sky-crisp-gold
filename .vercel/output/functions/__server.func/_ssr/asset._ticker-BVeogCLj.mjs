import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Route$1 } from "./router-RWAYoLf4.mjs";
import { t as PageShell } from "./page-shell-BSFu5CLz.mjs";
import { a as getAsset, i as formatPrice } from "./assets-BTZmw5oe.mjs";
import { t as useWatchlist } from "./use-watchlist-BH-HUrlV.mjs";
import { a as CartesianGrid, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/asset._ticker-BVeogCLj.js
var import_jsx_runtime = require_jsx_runtime();
function AssetPage() {
	const { ticker } = Route$1.useParams();
	const { section } = Route$1.useSearch();
	const asset = getAsset(ticker);
	const { add } = useWatchlist();
	if (!asset) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-center text-muted",
		children: [
			"No page for $",
			ticker.toUpperCase(),
			" yet."
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "text-link underline",
			children: "Back to today's list"
		})
	})] });
	const chart = asset.sparkline.map((price, i) => ({
		i,
		price
	}));
	const highlightEstimate = section === "estimate";
	const highlightRank = section === "rank";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 text-sm text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "hover:underline",
					children: "Home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-2",
					children: "/"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", asset.ticker] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-serif text-3xl font-semibold tracking-tight",
				children: [
					"$",
					asset.ticker,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-3 text-lg font-normal text-muted",
						children: asset.name
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-2xl tabular-nums",
				children: formatPrice(asset.price)
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => add(asset.ticker, "From quote page"),
				className: "h-10 rounded-md bg-ink px-4 text-sm font-medium text-white hover:bg-ink-2",
				children: "Add to my watchlist"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 h-64 rounded-lg border border-line bg-paper-2 p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
					data: chart,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "#eee",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "i",
							hide: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							domain: ["auto", "auto"],
							width: 48,
							tick: { fontSize: 11 }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							formatter: (v) => formatPrice(v),
							labelFormatter: () => asset.ticker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "price",
							stroke: "#0c0d10",
							strokeWidth: 2,
							dot: false
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				["Market cap", asset.marketCap],
				["P/E", asset.pe],
				["Volume", asset.volume],
				["Avg volume", asset.avgVolume],
				["EPS", asset.eps],
				["Dividend", asset.dividend],
				["Beta", asset.beta],
				["Sector", asset.sector]
			].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-line bg-paper-2 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wide text-muted",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-medium tabular-nums",
					children: v
				})]
			}, k))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "estimate",
				className: `rounded-lg border bg-paper-2 p-5 ${highlightEstimate ? "border-ink" : "border-line"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold uppercase tracking-wide text-muted",
						children: "aw.com 52W price estimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-3xl",
						children: asset.estimate
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `mt-2 text-sm ${asset.expectedMove === "Bullish" ? "text-bull" : "text-bear"}`,
						children: [
							asset.expectedMove,
							" · ",
							asset.timeHorizon
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "rank",
				className: `rounded-lg border bg-paper-2 p-5 ${highlightRank ? "border-ink" : "border-line"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold uppercase tracking-wide text-muted",
						children: "aw.com Rank"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-serif text-3xl",
						children: [asset.rank, "/100"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Relative setup quality versus the rest of the desk."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 max-w-3xl text-sm leading-relaxed text-muted",
			children: asset.about
		})
	] });
}
//#endregion
export { AssetPage as component };
