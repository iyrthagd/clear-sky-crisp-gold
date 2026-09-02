import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./page-shell-BSFu5CLz.mjs";
import { n as august29 } from "./assets-BTZmw5oe.mjs";
import { t as PersonalWatchlist } from "./personal-watchlist-C0CniPTB.mjs";
import { t as StockTable } from "./stock-table-90DnfvD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lists-rwRZpolX.js
var import_jsx_runtime = require_jsx_runtime();
function Lists() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-2xl font-semibold tracking-tight",
				children: "Previous Lists"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "August 29 archive"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockTable, {
			title: "August 29 List",
			assets: august29
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-10 rounded-md border border-dashed border-line bg-ad px-4 py-6 text-center text-sm text-muted",
			children: "Advertisement"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalWatchlist, {})
	] });
}
//#endregion
export { Lists as component };
