---
title: Smarter
tags: [React Native, TypeScript, MQTT, Expo]
image:
  src: /images/smarter.svg
  alt: Smarter IoT cover
timestamp: 2024-11-10
description: A React Native control room for field devices that turns MQTT messages into live power, connectivity, and motor controls — with safeguards for unreliable conditions.
codeLink: https://github.com/theprogrammerinyou/Smarter
---

Smarter is a React Native (Ignite + Expo) companion for monitoring and controlling field devices. It subscribes to a device topic over MQTT, translates raw messages into an at-a-glance view of mains power, motor state, and connection freshness, then publishes motor commands through a deliberate slide-to-confirm interaction.

The interesting engineering lives in the unhappy path. The app reconnects with backoff when a connection drops, treats stale timestamps as a disconnected device instead of showing misleading “live” data, and refuses motor commands when mains power is off. Those constraints make a small control surface feel trustworthy when the physical device is not always on a perfect network.
