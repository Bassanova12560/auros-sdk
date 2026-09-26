# AUROS Protocol SDK

[![npm protocol](https://img.shields.io/npm/v/@adrien1212balitrand/auros-protocol.svg?label=auros-protocol)](https://www.npmjs.com/package/@adrien1212balitrand/auros-protocol)
[![npm mcp](https://img.shields.io/npm/v/@adrien1212balitrand/auros-mcp.svg?label=auros-mcp)](https://www.npmjs.com/package/@adrien1212balitrand/auros-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Live](https://img.shields.io/badge/live-getauros.com-0a0a0a)](https://getauros.com)

**Public TypeScript surface** for [AUROS](https://getauros.com) — B2B RWA readiness intelligence.

Built by **[Adrien Balitrand](https://www.linkedin.com/in/adrien-balitrand-12b099405/)** · Product: **[getauros.com](https://getauros.com)** · API: **[Developers](https://getauros.com/developers)**

> This repository is the **browseable SDK + examples + MCP catalog metadata**. The application monorepo stays private. AUROS prepares readiness dossiers — it does not custody assets, broker trades, invent TVL, or claim on-chain issuance from a public wizard.

---

## Install

```bash
npm install @adrien1212balitrand/auros-protocol
# optional — agent tools
npx -y @adrien1212balitrand/auros-mcp
```

## Quickstart

```ts
import { AurosProtocol } from "@adrien1212balitrand/auros-protocol";

const client = new AurosProtocol({
  apiKey: "auros_pk_test_demo", // demo — replace with your key
});

const result = await client.score({
  description:
    "Retail warehouse Luxembourg €2.5M SPV professional investors whitepaper draft",
});

console.log(result.score, result.grade, result.mica_classification);
```

Free key (1000 req/mo on current free tier): [getauros.com/developers](https://getauros.com/developers)

## Repository layout

| Path | What |
|------|------|
| [`packages/auros-protocol/`](./packages/auros-protocol/) | Typed REST client source (published to npm) |
| [`examples/`](./examples/) | Copy-paste scripts (demo key only) |
| [`mcp/`](./mcp/) | Smithery / registry / Glama listing metadata |

## What you can call

| Area | Examples |
|------|----------|
| Readiness | `score`, `scoreBatch`, checklist |
| Market | `products` — curated compare catalog |
| Jurisdictions | Rank structuring hubs |
| Green | Watt / carbon quality helpers |
| Desk (auth) | Machine briefs — Gap · Activity · Variance (**unfused**) |

Public product metrics (not a mega-score):

- [Activity Index](https://getauros.com/activity)
- [Promise Gap](https://getauros.com/promise-gap)
- [Score](https://getauros.com/score)
- [Compare](https://getauros.com/compare)

## Examples

```bash
cd examples
# requires Node 18+
npx tsx score-basic.ts
npx tsx products-browse.ts
npx tsx jurisdictions.ts
```

See [`examples/README.md`](./examples/README.md).

## MCP (agents)

```bash
npx -y @adrien1212balitrand/auros-mcp
```

Desk tools (cite edition UTC): `desk_brief` · `activity_brief` · `variance_brief`.  
Catalog files: [`mcp/smithery.yaml`](./mcp/smithery.yaml) · [`mcp/server.json`](./mcp/server.json) · [`mcp/glama.json`](./mcp/glama.json).

## Related packages

| Package | Role |
|---------|------|
| [`@adrien1212balitrand/auros-protocol`](https://www.npmjs.com/package/@adrien1212balitrand/auros-protocol) | REST SDK |
| [`@adrien1212balitrand/auros-mcp`](https://www.npmjs.com/package/@adrien1212balitrand/auros-mcp) | MCP for Cursor / Claude / catalogs |
| [`@adrien1212balitrand/auros-shield`](https://www.npmjs.com/package/@adrien1212balitrand/auros-shield) | Proof / evidence client |

## Honest limits

- Indicative readiness — not legal advice, not a brokerage
- No invented APY / TVL / partnership logos
- Lab protocol demos are labeled; settlement stays human-gated (HITL)
- Application source (scoring IP, ops) is **not** in this repo

## Security

Report vulnerabilities to **security@getauros.com**. Do not open public issues with exploit details or customer data. See [SECURITY.md](./SECURITY.md).

## License

MIT — see [LICENSE](./LICENSE).

Product site and trademarks: © AUROS / Adrien Balitrand. Brand **AUROS** (getauros.com) ≠ Auros Global.
