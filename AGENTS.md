# AGENTS.md

## Project

Build a simple, modern freelance portfolio website for **Shajman Faiz** under the brand name **SafariByte**.

The website is for attracting freelance clients and presenting Shajman as an independent freelance web developer.

The site should feel personal, simple, trustworthy, and professional.

Do not make it look like a large software company or agency.

---

## Technology

Use:

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* Next.js App Router

Keep the implementation simple.

Do not add unnecessary libraries or complicated architecture.

---

## Important

This is an independent freelance website.

Do NOT include:

* Other personal projects
* Stock trading projects
* Engineering projects
* Employment history
* Certifications
* Personal background
* Complex technical explanations
* Unrelated professional information
* Claims about large companies or teams
* Fake client testimonials
* Fake statistics
* Fake projects

Only present Shajman Faiz as a freelance web developer.

---

## Brand

Brand:

**SafariByte**

Person:

**Shajman Faiz**

SafariByte should be presented simply as the name/brand of the freelance website.

Do not present SafariByte as a company with employees, departments, or a large organization.

---

## Main Purpose

The primary purpose of the website is:

> Get freelance web development work.

The website should quickly answer:

1. Who is Shajman?
2. What can he build?
3. How can a client contact him?

The visitor should understand the purpose of the website within a few seconds.

---

## Suggested Homepage

Create a single-page website.

Suggested sections:

### 1. Navbar

Simple navigation:

* Home
* Services
* About
* Contact

Include SafariByte as the logo/brand.

---

### 2. Hero

Keep the hero simple and personal.

Example direction:

**Hi, I'm Shajman Faiz.**

**I build websites and web applications for businesses and individuals.**

Short supporting text:

> I help turn ideas into clean, responsive and practical websites.

Buttons:

* Start a Project
* View Services

Do not use exaggerated marketing language.

---

### 3. Services

Show a small number of simple services.

For example:

#### Websites

Modern responsive websites for businesses, personal brands and small businesses.

#### Web Applications

Custom web applications built around a client's requirements.

#### Website Improvements

Improve, redesign or add features to an existing website.

#### Maintenance

Fix bugs, update websites and make ongoing improvements.

Keep descriptions short.

---

### 4. About

A short personal introduction.

Example direction:

> I'm Shajman Faiz, an independent freelance web developer. I enjoy building clean and useful websites and working directly with clients to turn their ideas into working products.

Keep this short.

Do not include a detailed biography.

---

### 5. Why Work With Me

Keep this simple.

Possible points:

* Direct communication
* Custom solutions
* Clean and responsive websites
* Focus on the client's requirements
* Flexible freelance work

Do not make unsupported claims such as "10+ years experience", "100+ clients", etc.

---

### 6. Contact

The most important conversion section.

Heading:

**Have a project in mind?**

Supporting text:

> Tell me what you need and let's discuss it.

Provide a clear contact method.

If contact information is not available in the project, use placeholders rather than inventing contact details.

Possible buttons:

* Email Me
* WhatsApp
* GitHub

Only add links when actual URLs are provided.

---

## Design

Use a clean modern design.

The visual style should be:

* Minimal
* Personal
* Professional
* Friendly
* Modern
* Easy to read

Avoid making it look overly technical.

Do not use:

* Excessive gradients
* Excessive animations
* Huge amounts of text
* Complicated background effects
* Too many cards
* Excessive glassmorphism
* Corporate-style dashboards

Whitespace is encouraged.

---

## Colors

Use a simple neutral color palette.

A light theme is acceptable.

A subtle dark theme is also acceptable if it improves the design.

Do not use many colors.

Choose one accent color and use it consistently.

---

## Typography

Use a clean modern font.

Create a clear hierarchy:

* Large hero heading
* Medium section headings
* Readable body text
* Clear buttons

Do not make every heading extremely large.

---

## Responsive Design

The website must work well on:

* Mobile
* Tablet
* Desktop

Use Tailwind responsive utilities.

The mobile version is important.

---

## Components

Keep components simple.

A possible structure:

```text
app/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── Navbar.tsx
├── Hero.tsx
├── Services.tsx
├── About.tsx
├── Contact.tsx
└── Footer.tsx

public/
└── ...

Do not create components unnecessarily.

For a small website, simple code is preferred.
```

---

## Content

Write content in clear, natural English.

The tone should sound like an independent person offering freelance services.

It should NOT sound like:

* A corporation
* A marketing agency
* An AI-generated startup
* A large software consultancy

Prefer:

> I build websites for people and businesses.

Instead of:

> We deliver innovative digital transformation solutions for modern enterprises.

Prefer simple language.

---

## GitHub Pages

The website must be deployable to:

```text
https://shajmanfaiz.github.io/SafariByte/
```

The GitHub repository is:

```text
SafariByte

Configure Next.js for static GitHub Pages deployment.

The site must correctly handle the `/SafariByte/` base path.

Make sure:

* CSS loads correctly
* JavaScript loads correctly
* Images load correctly
* Internal links work correctly
* Static export works

Do not use server-side functionality that requires a server.

---

## SEO

Use simple metadata.

Suggested title:

```text
Shajman Faiz — Freelance Web Developer
```

Suggested description:

```text
Shajman Faiz is an independent freelance web developer building modern websites and web applications.
```

---

## Performance

Keep the website lightweight.

Avoid unnecessary:

* Dependencies
* JavaScript
* Animations
* API calls
* Client components

Prefer static content.

---

## Code Quality

Use TypeScript.

Keep code readable and straightforward.

Avoid:

* `any`
* unnecessary state
* unnecessary `useEffect`
* unnecessary abstractions
* duplicated code
* complicated architecture

Use Tailwind CSS for styling.

Do not create large custom CSS files when Tailwind can handle the styling.

---

## Before Coding

First inspect the existing project.

Check:

* `package.json`
* Next.js version
* Tailwind setup
* `app/`
* existing configuration

Do not unnecessarily rebuild the project if a working setup already exists.

Preserve useful existing configuration.

---

## Final Goal

The finished website should feel like:

**Shajman Faiz — Independent Freelance Web Developer**

with:

**SafariByte** as the personal brand.

The visitor should immediately understand:

> Shajman builds websites and web applications and is available for freelance work.

Keep everything simple.