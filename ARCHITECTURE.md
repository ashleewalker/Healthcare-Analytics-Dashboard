# Architecture

The application is a single React entry point with deterministic local data and small utility/component modules.

- `src/main.jsx` — page composition and interactive state
- `src/data` — synthetic healthcare datasets
- `src/utils` — formatting, metrics, and business rules
- `src/components` — reusable UI primitives
- `src/styles.css` — responsive visual system
- `vitest.config.js` — isolated test runner

The design intentionally avoids APIs and backend services so the repository can be built and tested from a clean Node.js 20 environment.
