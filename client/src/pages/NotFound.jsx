import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <h1 className="text-6xl font-bold text-ink">404</h1>
      <p className="mt-4 text-lg text-ink/60">This page does not exist.</p>
      <Link
        to="/"
        className="mt-8 rounded-2xl bg-brand px-8 py-4 font-semibold text-white transition hover:brightness-110"
      >
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;
