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
- Follow the business rules in docs/reglas_de_negocio.txt.
- Follow OWASP basics.
- Validate inputs.
- Never expose secrets in frontend.
- Keep API layer separated from UI.
- Use mock data first.
- Build reusable components.
- Do not implement features outside MVP unless requested.