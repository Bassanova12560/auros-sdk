# Contributing

This is the **public thin SDK** surface for AUROS.

## What belongs here

- Typed client source under `packages/auros-protocol/`
- Runnable examples with the **demo** API key only
- MCP catalog metadata (`mcp/`)
- Docs that help developers call the live API

## What does not belong here

- Application / Next.js source, scoring IP, admin or cron recipes
- Real API keys, `.env*`, dumps, customer data
- Claims of TVL, invented APY, or unverified partnerships

## Workflow

1. Prefer opening issues for API / SDK bugs with a minimal repro.
2. Small PRs against `main` — examples and docs welcome.
3. Security: email **security@getauros.com** (see [SECURITY.md](./SECURITY.md)).

## Local examples

```bash
npm install -g tsx   # or npx
cd examples
npx tsx score-basic.ts
```

Live product & keys: https://getauros.com/developers
