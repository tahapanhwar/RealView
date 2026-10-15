function Footer() {
  return (
    <footer
      id="about"
      className="scroll-mt-24 bg-ink px-6 py-24 text-center text-white"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold sm:text-6xl">
          Ready to check an{" "}
          <span className="rounded-md bg-highlight px-2 text-ink">image</span>?
        </h2>

        <a
          href="#check"
          className="mt-10 inline-block rounded-2xl bg-brand px-8 py-4 text-lg font-semibold text-white transition hover:brightness-110"
        >
          Try RealView
        </a>

        <p className="mx-auto mt-16 max-w-xl text-sm text-white/50">
          RealView is a learning project that estimates whether an image is real
          or AI-generated. Results are estimates, not proof.
        </p>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} RealView
        </p>
      </div>
    </footer>
  );
}

export default Footer;
