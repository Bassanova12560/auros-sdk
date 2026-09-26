# Examples

Runnable against the **live** AUROS API with the public demo key.

```bash
# from repo root
npm install
npm run example:score
npm run example:products
npm run example:jurisdictions
```

Or one-shot:

```bash
npx tsx examples/score-basic.ts
```

| File | What |
|------|------|
| `score-basic.ts` | MiCA-oriented readiness score from a short description |
| `products-browse.ts` | Paginated compare catalog |
| `jurisdictions.ts` | Structuring hub ranking |

Set `AUROS_API_KEY` to use your own key from [getauros.com/developers](https://getauros.com/developers). Never commit real keys.
