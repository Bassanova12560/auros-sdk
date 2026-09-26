/**
 * Minimal score example — uses the public demo key only.
 * Replace with your key from https://getauros.com/developers
 */
import { AurosProtocol } from "@adrien1212balitrand/auros-protocol";

const client = new AurosProtocol({
  apiKey: process.env.AUROS_API_KEY ?? "auros_pk_test_demo",
});

const result = await client.score({
  description:
    "Solar lease SPV, professional investors, Luxembourg, draft whitepaper",
});

console.log({
  score: result.score,
  grade: result.grade,
  mica: result.mica_classification,
});
