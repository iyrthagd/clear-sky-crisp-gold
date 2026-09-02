import { o as __toESM } from "../_runtime.mjs";
import { z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-watchlist-BH-HUrlV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "aw.personal-watchlist";
function read() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function useWatchlist() {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setItems(read());
	}, []);
	const persist = (0, import_react.useCallback)((next) => {
		setItems(next);
		localStorage.setItem(KEY, JSON.stringify(next));
	}, []);
	return {
		items,
		add: (0, import_react.useCallback)((asset, notes) => {
			const ticker = asset.trim().replace(/^\$/, "").toUpperCase();
			if (!ticker) return;
			persist([...read().filter((i) => i.asset !== ticker), {
				asset: ticker,
				notes
			}]);
		}, [persist]),
		remove: (0, import_react.useCallback)((asset) => {
			persist(read().filter((i) => i.asset !== asset));
		}, [persist])
	};
}
//#endregion
export { useWatchlist as t };
