export const logger = {
  warn: (...OP: unknown[]) => console.warn("⚠️  Warning:", ...OP),
  error: (...OP: unknown[]) => console.error("❌ Error:", ...OP),
  info: (...OP: unknown[]) => console.info("🗨️  Info:", ...OP),
  debug: (...OP: unknown[]) => console.debug("🐛 Debug:", ...OP),
  success: (...OP: unknown[]) => console.log("✅ Success:", ...OP),
  critical: (...OP: unknown[]) => console.error("🔥 Critical:", ...OP),
  trace: (...OP: unknown[]) => console.trace("🔎 Trace:", ...OP),
  verbose: (...OP: unknown[]) => console.info("🗣️  Verbose:", ...OP),
};
