function ResultCard({ result }) {
  const isFake = result.verdict === "fake";

  return (
    <div className="mt-6 rounded-2xl border border-black/10 bg-paper p-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
        Result
      </p>

      <h3
        className={`mt-2 text-3xl font-bold ${isFake ? "text-fake" : "text-real"}`}
      >
        {isFake ? "Likely AI-generated" : "Likely real"}
      </h3>

      <div className="mt-5">
        <div className="flex justify-between text-sm text-ink/60">
          <span>Confidence</span>
          <span className="font-semibold text-ink">{result.confidence}%</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-black/10">
          <div
            className={`h-full rounded-full ${isFake ? "bg-fake" : "bg-real"}`}
            style={{ width: `${result.confidence}%` }}
          />
        </div>
      </div>

      <p className="mt-5 text-xs text-ink/50">
        This is an estimate, not proof. No detector is perfect.
      </p>
    </div>
  );
}

export default ResultCard;
