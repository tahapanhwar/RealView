import { useState } from "react";

const MAX_SIZE_MB = 5;
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

function UploadCard() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const selected = e.target.files[0];
    e.target.value = "";
    if (!selected) return;

    if (!ALLOWED_TYPES.includes(selected.type)) {
      setError("Please choose a JPG or PNG image.");
      return;
    }
    if (selected.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Image must be smaller than ${MAX_SIZE_MB} MB.`);
      return;
    }

    if (preview) URL.revokeObjectURL(preview);
    setError("");
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleReset = () => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setError("");
  };

  return (
    <section id="check" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-xl rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <h2 className="text-center text-3xl font-bold text-ink">
          Check an image
        </h2>

        {preview ? (
          <img
            src={preview}
            alt="Selected upload preview"
            className="mt-6 max-h-80 w-full rounded-2xl bg-paper object-contain"
          />
        ) : (
          <label
            htmlFor="image-input"
            className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/15 bg-paper px-6 py-14 text-center transition hover:border-brand"
          >
            <span className="text-lg font-semibold text-ink">
              Click to choose an image
            </span>
            <span className="mt-1 text-sm text-ink/60">
              JPG or PNG, up to {MAX_SIZE_MB} MB
            </span>
          </label>
        )}

        <input
          id="image-input"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          className="hidden"
        />

        {error && (
          <p className="mt-4 text-center text-sm text-red-600">{error}</p>
        )}

        <div className="mt-6 flex gap-3">
          <button
            disabled={!file}
            onClick={() => console.log(file)}
            className="flex-1 rounded-2xl bg-brand py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Analyze image
          </button>
          {file && (
            <button
              onClick={handleReset}
              className="rounded-2xl border border-black/10 px-5 py-3 font-semibold text-ink transition hover:bg-paper"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default UploadCard;
