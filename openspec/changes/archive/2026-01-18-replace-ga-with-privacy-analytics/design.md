## Context
The site currently uses Google Analytics gated by a cookie consent banner. The goal is to remove analytics tracking and the consent banner while keeping the site a static export with no server-side API routes.

## Goals / Non-Goals
- Goals:
  - Remove all analytical cookies and consent banner requirements.
  - Remove analytics trackers and simplify privacy disclosures.
- Non-Goals:
  - Change error monitoring (Sentry remains enabled).

## Decisions
- Decision: Remove Google Analytics and the analytics consent banner.
- Decision: Keep the site static-export compatible (no Next.js API routes).

## Risks / Trade-offs
- Loss of GA features (audiences, attribution) → accept no analytics tracking.

## Migration Plan
1. Remove GA + consent banner.
2. Update privacy policy and verify no analytics cookies are set.

## Open Questions
None.
