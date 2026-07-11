---
title: Streaming 50K ticks/sec with Kafka
description: Design notes from Trade Pulse Tracker — TCP ingest, ordering guarantees, and latency dashboards.
date: 2025-07-28
category: Engineering
tags: [kafka, nodejs, streaming, influxdb]
---

**Trade Pulse Tracker** ingests live market ticks and surfaces latency + alerts for traders.

## Pipeline sketch

```
TCP listener (Node.js)
    → Apache Kafka (strict ordering per symbol)
    → consumers / metrics
    → InfluxDB (P50 / P95)
    → React dashboard + email alerts
```

## Design choices

- **TCP listener** accepts ~50K ticks/sec in peak scenarios
- **Kafka** preserves ordering guarantees needed for tape-like feeds
- **InfluxDB** stores API latency histograms for ops visibility
- **React** dashboard for live monitoring; email path for actionable thresholds

## What I would improve next

- Backpressure and load-shedding policies under exchange spikes
- Schema registry for tick payloads
- Replay tooling for incident postmortems

Repo: [Trade-Pulse-Tracker](https://github.com/Mithilyaganti/Trade-Pulse-Tracker)
