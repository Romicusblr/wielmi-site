## Why
Node 24 provides current LTS features and security fixes, and the Node native test runner removes the extra Jest dependency for simpler tooling.

## What Changes
- **BREAKING** Update the required Node.js runtime to 24.x for development and builds.
- Replace Jest with the Node.js native test runner for automated tests.

## Impact
- Affected specs: platform
- Affected code: package.json, test configs, CI scripts (if present), and any test utilities
