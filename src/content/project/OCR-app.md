---
title: OCR Study Website
tags: [React, Python, WebSockets, OpenSearch, OpenAI]
timestamp: 2023-10-20
featured: true
image:
  src: /images/ocr-app-fe.png
  alt: OCR study website
description: An OCR-powered study companion that recognizes the textbook page in front of a student, retrieves the right lesson context, and answers doubts through text or voice.
demoLink: https://ocr-app-fe.vercel.app
codeLink: https://github.com/tonhazarika/OCR-APP-FE
---

This freelance learning product helps students in classes VI–X turn a physical textbook into an interactive study session. A live book view is used to identify the subject, chapter, sub-chapter, and page; the app then surfaces the most relevant videos, MCQs, and help instead of making the student hunt through a catalogue.

Three modes:

1. **Automatic** — continuous recognition of what the student is reading.
2. **Manual crop** — draw a rectangle on the page; OpenSearch finds the matching unit and OpenAI answers the doubt.
3. **Voice** — browser speech-to-text in, text-to-speech out.

I owned the frontend, backend, WebSocket updates, and the retrieval loop. The key design challenge was making the AI feel grounded in the page the learner was actually reading, so the flow deliberately follows capture → parse → retrieve → generate. That keeps answers useful, contextual, and much less like a generic chatbot.
