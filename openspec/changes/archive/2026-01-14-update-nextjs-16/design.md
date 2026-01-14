## Context
This project is a static-exported Next.js 14 App Router site with Tailwind, Sentry, next-sitemap, and next-export-optimize-images. The installed version is already 15.5.3, but `package.json` still points to 14.x, so the proposal targets aligning to the latest stable 15.x and addressing audit findings.

## Goals / Non-Goals
- Goals: move to the latest Next.js 15.x patch; minimize regression risk; preserve static export output and SEO tooling; resolve security advisories.
- Non-Goals: introduce new features, refactor UI, or change routing/content structure.

## Pros / Cons
Pros:
- Security fixes for known Next.js vulnerabilities in 15.x.
- Aligns `package.json` with the installed Next.js version and current ecosystem tooling.
- Lower migration risk than a jump to 16.x while still moving forward.

Cons:
- Patch-level changes can still introduce breaking or behavior changes.
- Third-party tooling risk remains: `next-export-optimize-images`, `@sentry/nextjs`, and `@next/third-parties` compatibility must be verified.
- Static export behavior could change and require adjustments or workarounds.

## Difficulty Assessment (Current Codebase)
Low. This is a patch-level upgrade within 15.x, and the codebase uses mostly static pages with minimal advanced Next features. The largest risk remains external tooling compatibility (image export plugin, Sentry, and sitemap generation).

## Compatibility Notes
- Latest stable Next.js 15.x: 15.5.9 (Node engines: ^18.18.0 || ^19.8.0 || >=20.0.0).
- `next-export-optimize-images` peer deps include `next: 14.x || 15.x`.
- `next-sitemap` peer deps allow any `next` version (`next: "*"`).
- `@sentry/nextjs` peer deps include `^15.0.0-rc.0`.
- `@next/third-parties` peer deps include `^15.0.0`.

## Release Notes Review
- v15.5.9 is a security patch release; release notes point to the Next.js security update (2025-12-11).

## Decisions
- Decision: Upgrade to the latest 15.x patch and align package manifests/lockfile.
- Alternatives considered: stay on 14.x; upgrade to 16.x (higher risk and plugin compatibility uncertainty).

## Risks / Trade-offs
- Build pipeline breakage if `next-export-optimize-images` or `next-sitemap` is incompatible.
- Potential regression in `@next/third-parties` integration and cookie consent gating.
- Unknown API or config deprecations affecting `output: "export"` and image sizing.

## Migration Plan
1. Review latest 15.x release notes and security advisories.
2. Upgrade dependencies and align `package.json`/`pnpm-lock.yaml`.
3. Validate build/export output and check sitemap generation.
4. Run tests and smoke-check key pages.

## Open Questions
- Are there any known compatibility gaps with `next-export-optimize-images` for the latest 15.x?
