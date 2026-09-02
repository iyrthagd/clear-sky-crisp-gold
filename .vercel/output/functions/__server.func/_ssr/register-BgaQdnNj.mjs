import { o as __toESM } from "../_runtime.mjs";
import { _ as Link, b as require_jsx_runtime, v as useNavigate, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as GROK_PROVIDERS } from "./router-RWAYoLf4.mjs";
import { n as authClient, r as signIn, t as PageShell } from "./page-shell-BSFu5CLz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-BgaQdnNj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Register() {
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		setError("");
		setBusy(true);
		const { error: err } = await authClient.signUp.email({
			email,
			password,
			name,
			callbackURL: "/"
		});
		setBusy(false);
		if (err) {
			setError(err.message ?? "Could not create the account.");
			return;
		}
		navigate({ to: "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-sm rounded-lg border border-line bg-paper-2 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-1 font-serif text-xl font-semibold",
				children: "Create account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-5 text-sm text-muted",
				children: "Google, X, or email and a password."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => signIn(p.providerId, { callbackURL: "/" }),
						className: "h-10 w-full rounded-md border border-line text-sm hover:bg-paper",
						children: ["Continue with ", p.label]
					}, p.providerId))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-4 text-center text-xs uppercase tracking-wide text-muted",
					children: "or"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Name",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "Email",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							minLength: 8,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "Password (8+ characters)",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bear",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: busy,
							className: "h-10 w-full rounded-md bg-ink text-sm font-medium text-white hover:bg-ink-2 disabled:opacity-60",
							children: busy ? "Creating…" : "Create account"
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-center text-sm text-muted",
				children: [
					"Already have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-link hover:underline",
						children: "Login"
					})
				]
			})
		]
	}) });
}
//#endregion
export { Register as component };
