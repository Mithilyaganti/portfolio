---
title: Hierarchical RAG for financial PDFs
description: Notes from building a PIKE-style RAG pipeline at Infosys — multimodal extraction, ChromaDB, and accuracy wins.
date: 2026-04-15
category: Engineering
tags: [rag, langchain, fastapi, chromadb]
---

At Infosys I worked on a **PIKE RAG pipeline** aimed at financial PDF Q&A. Traditional chunk-and-embed retrieval was losing structure in tables, charts, and multi-page filings.

## What we built

- **Hierarchical retrieval** so questions can target document → section → chunk levels
- **Multimodal extraction** with PyMuPDF and vision-language models for tables and figures
- **Vector store** in ChromaDB with metadata filters (doc type, date, section)
- **API surface** via FastAPI + LangChain orchestration

## Results

Against a baseline single-pass RAG setup, hierarchical + multimodal retrieval improved answer usefulness and retrieval accuracy by roughly **80%** on our internal eval set (financial Q&A over PDFs).

## Takeaways

1. PDF layout is half the problem — treat tables and figures as first-class content.
2. Metadata is as important as embeddings for enterprise docs.
3. Eval early: build a small golden set of questions before tuning chunk size forever.

More project context lives on the Projects page and in related GitHub repos.
