import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./page-shell-BSFu5CLz.mjs";
import { r as august30 } from "./assets-BTZmw5oe.mjs";
import { t as PersonalWatchlist } from "./personal-watchlist-C0CniPTB.mjs";
import { t as StockTable } from "./stock-table-90DnfvD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CyPSZjBm.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-2xl font-semibold tracking-tight",
				children: "August 30 List"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "08/31/26 · 10 names on the desk today"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockTable, {
			title: "August 30 List",
			assets: august30
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-10 rounded-md border border-dashed border-line bg-ad px-4 py-6 text-center text-sm text-muted",
			children: "Advertisement — a second placement under the list"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalWatchlist, {})
	] });
}
//#endregion
export { Home as component };
