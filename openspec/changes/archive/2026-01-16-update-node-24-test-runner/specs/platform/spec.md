## ADDED Requirements
### Requirement: Node.js Runtime Version
The project SHALL use Node.js 24.x for development, builds, and CI automation.

#### Scenario: Runtime version enforced
- **WHEN** dependencies are installed or CI runs the build
- **THEN** the required Node.js version resolves to 24.x

### Requirement: Node Native Test Runner
The project SHALL use the Node.js native test runner for automated tests.

#### Scenario: Tests run without Jest
- **WHEN** automated tests are executed
- **THEN** the Node.js native test runner is used and Jest is not required
