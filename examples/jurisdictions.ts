/**
 * Rank structuring jurisdictions (indicative — not legal advice).
 */
import { AurosProtocol } from "@adrien1212balitrand/auros-protocol";

const client = new AurosProtocol({
  apiKey: process.env.AUROS_API_KEY ?? "auros_pk_test_demo",
});

const hubs = await client.jurisdictions({
  asset_type: "real_estate",
  investor_type: "professional",
});

console.log(
  hubs.disclaimer,
  hubs.jurisdictions.slice(0, 8).map((j) => ({
    id: j.id,
    score: j.score,
    rationale: j.rationale,
  })),
);
