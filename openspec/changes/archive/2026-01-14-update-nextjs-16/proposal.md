## Why
Apply security fixes and align the codebase with the latest stable Next.js 15.x release, based on current audit findings and installed version drift.

## What Changes
- Update `next` to the latest 15.x and align related Next packages (`@next/third-parties`, `@next/bundle-analyzer`, `eslint-config-next`).
- Resolve the current version mismatch between `package.json` (14.x) and installed `next` (15.x).
- Review and adjust configuration for static export (`output: "export"`, `trailingSlash`) and image optimization plugin compatibility.
- Validate Sentry, sitemap generation, and export image optimization tooling against the updated Next version.
- Migrate `next lint` to the ESLint CLI per Next.js guidance.
- **BREAKING**: Address any Next.js 15 breaking changes that affect App Router, static export, or build pipeline.

## Impact
- Affected specs: None (no OpenSpec specs defined yet).
- Affected code: `package.json`, `pnpm-lock.yaml`, `next.config.mjs`, `src/app`, `src/ui`, build scripts.
