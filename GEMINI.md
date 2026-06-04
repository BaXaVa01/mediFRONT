# MediFind project context



use superpowers.

style: caveman ultra.
short output. no yapping.
prefer code over explanation.
before coding: inspect files.
after coding: run tests/build.
write progress to AI_LOG.md.

security:
- never touch .env, secrets, keys, prod configs.
- never delete files unless explicitly required.
- no random packages without reason.
- no network/deploy commands.
- follow OWASP principles.

iteration rules:
- work in small steps.
- after each step, summarize in 3 bullets max.
- stop if tests fail twice.


Always read these files before proposing code:
- docs/reglas_de_negocio.txt
- docs/estructura_de_tablas.txt
- docs/primeros_endpoints_prototipo.txt
- docs/mvp_medifind.md
- docs/design_system.md

When working on UI, inspect:
- docs/mockups/

Technical stack:
- frontend: React + Vite + TypeScript + Tailwind + shadcn/ui

Rules:
- allways use graphify before editing anything
- Follow the business rules in docs/reglas_de_negocio.txt.
- Follow OWASP basics.
- Validate inputs.
- Never expose secrets in frontend.
- Keep API layer separated from UI.
- Use mock data first.
- Build reusable components.
- Do not implement features outside MVP unless requested.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- ALWAYS read graphify-out/GRAPH_REPORT.md before reading any source files, running grep/glob searches, or answering codebase questions. The graph is your primary map of the codebase.
- IF graphify-out/wiki/index.md EXISTS, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
