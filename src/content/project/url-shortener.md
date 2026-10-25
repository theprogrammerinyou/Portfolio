---
title: LinkSwift
tags: [.NET 10, React, Redis, PostgreSQL, Docker]
image:
  src: /images/linkswift.svg
  alt: LinkSwift architecture cover
timestamp: 2026-06-26
featured: true
description: A production-minded URL shortener with secure accounts, custom links, QR codes, analytics, Redis-accelerated redirects, and layered protection against noisy traffic.
demoLink: https://shivansh-linkswift.netlify.app/
codeLink: https://github.com/theprogrammerinyou/url-shortener
---

LinkSwift is a full-stack URL shortener built like a real product rather than a toy redirect endpoint. It pairs a .NET 10 Web API with a React + MUI dashboard, Neon PostgreSQL for durable data, and Redis to keep the high-traffic redirect path quick. Users can create a link, protect it, customise it, and understand what happens after they share it.

Highlights:

- Short codes with duplicate prevention and optional expiry
- JWT signup/login, private links, custom aliases
- QR generation and click analytics (counts, growth, geo, referrals)
- Cache-aside on the hot redirect path
- Token-bucket writes and sliding-window reads, partitioned by client IP
- Docker Compose local stack and xUnit tests

The API, Core, and Infrastructure projects stay separated so storage, rate limiting, and key generation can evolve without rewriting the domain logic. It is a practical exploration of clean architecture, observability-friendly analytics, and performance work where it genuinely matters.
