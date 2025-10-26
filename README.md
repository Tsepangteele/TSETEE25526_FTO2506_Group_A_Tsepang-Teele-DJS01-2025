🎙️ DJS01: Vanilla JS Podcast App

A clean, responsive web application built with HTML, Tailwind CSS, and Vanilla JavaScript, allowing users to browse podcast shows and view detailed information through a dynamic modal — all without leaving the page.

🌟 Overview

The Podcast App displays a curated selection of podcast shows with their cover images, genres, number of seasons, and last updated dates. When a user clicks on a podcast card, a detailed modal pops up with expanded information, including a larger image, description, genre tags, and a full list of seasons.

This project was created as part of the DJS01: JavaScript Fundamentals Module — focusing on modular, interactive UI components and JavaScript best practices.

🧭 Features
🎧 Landing Page – Podcast Previews

Displays a grid of podcast cards.

Each card includes:

Cover image

Podcast title

Number of seasons

Genre tags

“Last updated” time.

💬 Modal View – Show Details

Opens when a user clicks a podcast card.

Contains:

Larger cover image

Podcast title & full description

Genre badges

Last updated date

List of seasons with episode counts.

Includes a close button and backdrop click support for accessibility.

🧱 Code Structure & Best Practices

Organized into separate files:

index.html → structure

main.js → rendering and event handling

modal.js → modal logic

data.js → podcast and genre data

utils.js → reusable helper functions

Follows modular, functional JS principles.

Uses DOM manipulation without page reloads.

Fully responsive using Tailwind CSS utility classes.

🧩 Tech Stack

HTML5 for structure

Tailwind CSS for styling and responsiveness

Vanilla JavaScript (ES Modules) for interactivity

🖥️ Design & UX Goals

Clean, minimal layout inspired by modern podcast platforms.

Clear visual hierarchy and consistent spacing.

Smooth transitions between card and modal views.

Fully responsive (desktop, tablet, mobile).

Accessibility-first approach (readable text, keyboard-accessible modal).

---

## Deliverables

- A fully functional, responsive podcast preview web application.
- Clean, well-commented source code (HTML, CSS, JS).
