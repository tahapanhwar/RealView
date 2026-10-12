function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <span className="mb-6 rounded-full bg-highlight px-4 py-1 text-sm font-semibold text-ink">
        AI image detection
      </span>

      <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-ink sm:text-7xl">
        Is that image real or AI-made?
      </h1>

      <p className="mt-6 max-w-xl text-lg text-ink/60">
        Upload any image and RealView tells you how likely it is to be fake,
        with a confidence score.
      </p>

      <a
        href="#check"
        className="mt-10 rounded-2xl bg-brand px-8 py-4 text-lg font-semibold text-white transition hover:brightness-110"
      >
        Check an image
      </a>
    </section>
  );
}

export default Hero;
