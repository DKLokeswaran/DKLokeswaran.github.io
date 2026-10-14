---
title: Flexi Pomodoro
summary: Self-hosted, flow-aware Pomodoro timer. A TypeScript monorepo with a Fastify API and a React UI.
url: https://github.com/DKLokeswaran/flexi-pomodoro
featured: true
order: 1
stack:
  - TypeScript
  - Fastify 5
  - REST
  - Server-sent events
  - React 19
  - Vite
  - TanStack Query
  - Zod
  - SQLite
  - Docker Compose
status: Alpha (0.0.2-alpha.3). Settings and session history write through to SQLite. Restoring an in-flight session on startup is not implemented yet.
---

A single-user timer meant to be self-hosted. Planned work does not have to end on a hard stop: a short decision window can continue into extended work, rest lengths stay as configured, and a started session runs through its planned cycles. Work can use a soft pause, which leaves the planned end time unchanged, or an experimental hard pause.

The repository is an npm-workspaces monorepo. A Fastify 5 server exposes REST and server-sent events. The interface is React 19, built with Vite, and reads server state with TanStack Query. Shared payloads are validated with Zod. Docker Compose runs the app and mounts a data directory.

SQLite, through Knex and better-sqlite3, stores settings and writes session history as the timer runs. Loading an in-flight session back from that database when the process starts is still unfinished.
