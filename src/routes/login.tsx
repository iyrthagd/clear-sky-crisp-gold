import { FormEvent, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authClient, authEnabled, signIn } from "@/lib/auth/client";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    const { error: err } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    setBusy(false);
    if (err) setError(err.message ?? "Could not sign in.");
  }

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-sm rounded-lg border border-line bg-paper-2 p-6">
        <h1 className="mb-1 font-serif text-xl font-semibold">Login</h1>
        <p className="mb-5 text-sm text-muted">Use Google, X, or email.</p>
        {authEnabled ? (
          <>
            <div className="space-y-2">
              {GROK_PROVIDERS.map((p) => (
                <button
                  key={p.providerId}
                  type="button"
                  onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                  className="h-10 w-full rounded-md border border-line text-sm hover:bg-paper"
                >
                  Continue with {p.label}
                </button>
              ))}
            </div>
            <div className="my-4 text-center text-xs uppercase tracking-wide text-muted">or</div>
            <form onSubmit={onSubmit} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-10 w-full rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="h-10 w-full rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
              />
              {error ? <p className="text-sm text-bear">{error}</p> : null}
              <button
                type="submit"
                disabled={busy}
                className="h-10 w-full rounded-md bg-ink text-sm font-medium text-white hover:bg-ink-2 disabled:opacity-60"
              >
                {busy ? "Signing in…" : "Sign in with email"}
              </button>
            </form>
          </>
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
        <p className="mt-5 text-center text-sm text-muted">
          New here?{" "}
          <Link to="/register" className="text-link hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
