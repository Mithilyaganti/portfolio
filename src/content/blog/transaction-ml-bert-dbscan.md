---
title: Transaction classification with BERT + DBSCAN
description: How a BERT classifier and density clustering hit 97% accuracy on transaction labels at Fluition Sphere.
date: 2025-08-10
category: Machine Learning
tags: [bert, nlp, dbscan, pytorch]
---

During my internship at **Fluition Sphere**, one core problem was labeling noisy financial transactions for automated insights.

## Approach

1. **BERT** classifier for primary transaction categories
2. **DBSCAN** to surface clusters of anomalous or unlabeled patterns
3. Serving via **Dockerized FastAPI** microservices
4. **React** frontend with **Redis / Celery** for async email-driven retrieval
5. **PostgreSQL** for durable insight storage

## Outcome

The classification stack reached about **97% accuracy** on the held-out set used during the internship.

## Lessons

- Domain vocabulary in transactions is short and noisy — fine-tuning beats generic embeddings alone.
- Clustering is useful as a *discovery* tool for new categories, not only as a classifier substitute.
- Async job queues matter when email and bank connectors are flaky.
