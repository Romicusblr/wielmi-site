## 1. Research and Compatibility
- [x] 1.1 Review latest Next.js 15.x release notes for breaking changes and required React/Node versions.
- [x] 1.2 Confirm compatibility of `next-export-optimize-images`, `next-sitemap`, `@sentry/nextjs`, and `@next/third-parties` with 15.x.

## 2. Upgrade and Config Updates
- [x] 2.1 Update `next` and related packages in `package.json` to the latest 15.x.
- [x] 2.2 Align `pnpm-lock.yaml` to remove the 14.x vs 15.x version mismatch.
- [x] 2.3 Adjust `next.config.mjs` for any changed defaults or deprecated options.
- [x] 2.4 Update image components or metadata usage if required by Next 15 changes.
- [x] 2.5 Migrate `next lint` to the ESLint CLI using `@next/codemod`.

## 3. Validation
- [x] 3.1 Run `pnpm lint` and `pnpm test`.
- [x] 3.2 Run `pnpm build` and verify `out/` static export output.
- [x] 3.3 Smoke-check key pages locally and verify sitemap generation.
