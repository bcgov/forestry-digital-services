---
layout: home
name: MOFDB
title: MOF Database Repository (MOFDB)
order: 10
description:
---

# MOF Database Repository / MOF-DB (nr-mof-db)

> **Repository status:** Private — hosted under the `bcgov-c` GitHub organization.
> See [Requesting Access](#requesting-access) below to get involved.

---

## What is it?

The Ministry of Forests Database repository (`nr-mof-db`) is the **single source of truth** for all Oracle DDL (Data Definition Language) changes destined for the MOF application databases:
  * `DBQ01` (Test)
  * `DBP01` (Production).

Before this project existed, database change scripts were scattered across dozens of individual SVN repositories in varying states of currency and accuracy. There was no reliable way to know what was actually deployed, no early warning when two teams were about to step on each other's work, and no automated safety net before a DBA had to manually review a deployment package.

The MOFDB repository changes that.

---

## Who does it serve?

The repository is designed around three personas:

| Role | What they do here |
| :--- | :--- |
| **Developer / Contractor** | Authors DDL change scripts, opens a Pull Request, and monitors CI feedback |
| **Database Administrator (DBA)** | Downloads a pre-packaged deployment artifact from the PR, deploys to TEST then PROD, and applies GitHub labels to record progress |
| **Proponent / Product Owner** | Tracks the status of a requested change through the GitHub PR audit trail |

---

## How the delivery process works

A database change travels through the following stages entirely within GitHub — no email attachments, no shared drives, no ambiguity about what is deployed where.

<pre class="mermaid">
graph TD
    A[Developer writes DDL + rollback script] --> B[Push branch & open Pull Request]
    B --> C[RFC/RFD created and scheduled]
    C --> D[CI validates SQL rules and structure]
    D -->|pass| E[Automation packages a ZIP artifact + deployment readme]
    E --> F[DBA downloads artifact, deploys to TEST]
    F --> G[DBA applies 1-DEPLOYED label]
    G --> H[Dev/QA validates in TEST, applies 2-VALIDATED label]
    H --> I[DBA deploys to PROD, applies 3-COMPLETE label]
    I --> J[PR is merged — migration files are automatically renamed]
</pre>

### What the automation does for you

- **SQL validation on every push** — A suite of rules (enforced by a custom Node.js validator) checks schema qualification, file naming conventions, folder placement, and structural separation of concerns (tables, constraints, foreign keys, views, grants all live in their own directories).
- **Artifact generation** — When SQL under `scripts/` changes, the pipeline automatically packages a ZIP containing the relevant migration files and an auto-generated, ordered deployment `README` for the DBA. The ZIP is attached directly to the PR as a comment.
- **Label-driven deployment gates** — Three GitHub labels (`1-DEPLOYED`, `2-VALIDATED`, `3-COMPLETE`) must all be present before a PR can be merged. This creates an immutable, timestamped audit record of who approved each stage and when.
- **Stale sign-off protection** — If new SQL is pushed to an open PR, the labels are automatically cleared so a previous DBA sign-off cannot accidentally carry forward to revised scripts.
- **Local testing** — Developers can spin up a local Oracle database via Docker and run all migrations against it before opening a PR, catching errors before they ever reach the DBA.

---

## Why it makes things better

### Before nr-mof-db

- DDL lived in many SVN repos, each in an unknown state of accuracy.
- Conflicts between teams were discovered at deployment time — by the DBA, under pressure.
- No developer could be confident their change wouldn't break another application's objects.
- Deployment packages were assembled manually and handed over informally.
- There was no version history of how the schema evolved over time.

### After nr-mof-db

| Problem | Solution |
| :--- | :--- |
| Scattered, stale DDL | One repository, one source of truth for all MOF schema objects |
| Late conflict detection | Developers see each other's pending changes on open PRs before deployment |
| Unreliable dev environments | Any developer can build a complete local Oracle database with all objects in one command |
| Manual, error-prone delivery | Auto-generated, ordered deployment ZIP attached to every PR |
| No deployment audit trail | GitHub PR labels, timestamps, and commit history provide a full record |
| Inconsistent formatting | Automated validators enforce consistent structure on every PR |

---

## Technology stack

| Component | Role |
| :--- | :--- |
| **GitHub** (bcgov-c org) | Source of truth, CI/CD, PR workflow, audit trail |
| **GitHub Actions** | SQL validation, artifact packaging, label gate enforcement |
| **Alembic** (customized) | Executes Flyway-compatible migrations locally and in Docker |
| **Docker + Oracle** | Local development database for pre-PR testing |
| **Node.js validators** | Custom rule engine — no external dependencies |

SQL files follow **Flyway versioning conventions** (`V{major}.{minor}__description.sql`) so the migration order is unambiguous and immutable once merged.

---

## Requesting Access

The repository is private and hosted in the `bcgov-c` GitHub organization, which requires authorization from the Forestry Digital Services team.

To request access:

1. **Reach out via Microsoft Teams** — Contact the Forestry Digital Services team through the relevant Teams channel for your project. A team member will verify your role and initiate the access request.
2. **Confirm your GitHub account** — You will need an existing GitHub account. Ensure it is linked to or discoverable by your IDIR/business identity if required by your organization's policy.
3. **Access is granted at the repository level** — Contractors and external developers are typically granted `Write` access scoped to the repository only. DBA reviewers are typically granted `Read` access.

> Access requests from contractors should be initiated by the internal proponent / product owner sponsoring the work.

---

## Related resources

- [Forestry Digital Services — GitHub Organization](https://github.com/bcgov/forestry-digital-services/)
- [BC Government GitHub organization guidance](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/bc-government-organizations-in-github/)
