/**
 * Browse the public RWA compare catalog (paginated).
 * Demo key only — replace via AUROS_API_KEY for your quota.
 */
import { AurosProtocol } from "@adrien1212balitrand/auros-protocol";

const client = new AurosProtocol({
  apiKey: process.env.AUROS_API_KEY ?? "auros_pk_test_demo",
});

const page = await client.products({ limit: 5, sort: "name" });

console.log(
  page.disclaimer,
  page.products.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.category,
    live: p.live,
  })),
);
