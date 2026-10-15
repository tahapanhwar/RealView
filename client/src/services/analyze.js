export function analyzeImage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isFake = Math.random() > 0.5;
      resolve({
        verdict: isFake ? "fake" : "real",
        confidence: Math.round(70 + Math.random() * 29),
      });
    }, 1500);
  });
}
