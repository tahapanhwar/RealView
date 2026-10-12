const steps = [
  {
    number: "01",
    title: "Upload an image",
    text: "Choose a JPG or PNG from your device.",
  },
  {
    number: "02",
    title: "We analyze it",
    text: "Our model looks for signs of AI generation or manipulation.",
  },
  {
    number: "03",
    title: "Get your result",
    text: "See a verdict with a confidence score, not a guarantee.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-ink px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          How it{" "}
          <span className="rounded-md bg-highlight px-2 text-ink">works</span>
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <span className="text-sm font-semibold text-brand">
                {step.number}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-white/60">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
