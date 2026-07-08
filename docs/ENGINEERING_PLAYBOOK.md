# Sakeng Livestock — Engineering Playbook

> This document defines the engineering standards, principles and development practices for Sakeng Livestock.

The purpose of this playbook is to ensure that every contribution to Sakeng remains consistent, maintainable and aligned with the long-term vision of the platform.

---

# Engineering Philosophy

## Build For Longevity

Write code that is easy to understand, maintain and extend.

Prefer:

- Readability
- Simplicity
- Reusability
- Consistency

Avoid:

- Clever code
- Premature optimisation
- Over-engineering
- Unnecessary abstractions

---

# Core Engineering Principles

## 1. Simplicity Over Complexity

The simplest solution that solves the problem is usually the correct solution.

Ask:

- Can this be simpler?
- Does this abstraction add value?
- Will another developer understand this immediately?

---

## 2. Performance Is A Feature

Performance is a product requirement.

Always optimise for:

- Slow networks
- Mobile devices
- Low-end smartphones
- Reduced data usage

---

## 3. Build For Lesotho First

Assume:

- Limited internet access
- Expensive mobile data
- Older devices
- Rural connectivity challenges

Every engineering decision should respect these realities.

---

## 4. Trust By Design

Trust is a feature.

Applications should be:

- Reliable
- Predictable
- Secure
- Transparent

---

# Technology Stack

## Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

---

## Backend

- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage

---

## Infrastructure

- Vercel
- Hostinger
- GitHub
- GitHub Codespaces

---

# Project Structure

```text
app/
components/
features/
hooks/
lib/
types/
styles/
public/
supabase/
docs/
```

---

# Folder Responsibilities

## app/

Contains:

- Pages
- Layouts
- Route groups

Avoid:

- Business logic
- Database queries
- Large components

---

## components/

Contains:

Reusable UI components.

Examples:

- ListingCard
- Header
- Footer
- Button
- Badge

---

## features/

Contains:

Feature-specific components and business logic.

Examples:

```text
features/
├── listings
├── requests
├── dashboard
├── authentication
```

---

## hooks/

Contains:

Reusable React hooks.

Examples:

```text
useListings()
useAuth()
useMediaQuery()
```

---

## lib/

Contains:

Shared utilities.

Examples:

```text
supabase.ts
formatPrice.ts
constants.ts
utils.ts
```

---

## types/

Contains:

TypeScript definitions.

Examples:

```text
listing.ts
category.ts
user.ts
```

---

## styles/

Contains:

Global styles.

---

## public/

Contains:

Static assets.

---

## supabase/

Contains:

Database migrations and seed files.

---

# Naming Conventions

## Components

Use:

```text
PascalCase
```

Example:

```text
ListingCard.tsx
```

---

## Functions

Use:

```text
camelCase
```

Example:

```text
getListings()
```

---

## Variables

Use:

```text
camelCase
```

---

## Database

Use:

```text
snake_case
```

Example:

```text
listing_images
created_at
district_id
```

---

## Routes

Use:

```text
kebab-case
```

Example:

```text
/request-livestock
```

---

## Environment Variables

Use:

```text
UPPER_CASE
```

---

# Component Philosophy

Components should:

- Have one responsibility.
- Be reusable.
- Be composable.
- Be easy to test.

Avoid:

- Giant components.
- Business logic inside UI.
- Duplicate code.

---

# State Management

Prefer:

1. Local State
2. Context API
3. Server State

Avoid introducing state libraries unless absolutely necessary.

Do not add complexity prematurely.

---

# Data Fetching Principles

Prefer:

- Server Components
- Server Actions
- Caching where appropriate

Avoid:

- Unnecessary client fetching
- Duplicate requests
- Over-fetching data

---

# Performance Standards

## Images

Requirements:

- Compress before upload.
- Serve responsive sizes.
- Optimise for mobile.
- Deliver via CDN.

---

## Database

Requirements:

- Index commonly queried fields.
- Avoid N+1 queries.
- Fetch only required data.

---

## Frontend

Requirements:

- Lazy load where appropriate.
- Minimise JavaScript.
- Avoid unnecessary re-renders.

---

# Mobile-First Standards

All interfaces should:

- Work on small screens first.
- Scale upwards gracefully.
- Support touch interactions.
- Minimise scrolling fatigue.

---

# Accessibility Standards

Applications should:

- Use semantic HTML.
- Support keyboard navigation.
- Use sufficient contrast.
- Provide descriptive labels.

Accessibility should be considered by default.

---

# Forms

Forms should:

- Validate input.
- Display helpful errors.
- Prevent invalid submissions.
- Provide loading states.

---

# Error Handling

Always:

- Handle failures gracefully.
- Display user-friendly messages.
- Log unexpected errors.

Never expose:

- Internal errors
- Stack traces
- Sensitive information

---

# Security Principles

## Authentication

- Use Supabase Auth.
- Protect admin routes.
- Never expose secrets.

---

## Database

- Enable Row Level Security.
- Use least privilege principles.

---

## Environment Variables

Never commit:

```text
.env
.env.local
```

---

# Git Workflow

## Branch Naming

```text
feature/add-listings
feature/request-form
fix/mobile-header
```

---

## Commit Convention

```text
feat:
fix:
docs:
refactor:
style:
chore:
```

Examples:

```text
feat: add listing filters
fix: resolve image upload bug
docs: update architecture document
```

---

# Pull Request Checklist

Before merging:

- Code builds successfully.
- Types pass.
- Lint passes.
- No console errors.
- Documentation updated if necessary.
- Mobile responsiveness checked.

---

# AI-Assisted Development Rules

AI tools are encouraged.

However:

- Review all generated code.
- Understand before committing.
- Avoid blind copy-paste.
- Maintain consistency.

AI should assist engineering, not replace engineering judgement.

---

# Documentation First

Significant architectural decisions should be documented.

When adding major features:

Ask:

1. Why is this needed?
2. Does it align with the architecture?
3. Does it increase complexity?
4. Is there a simpler solution?

---

# Future Engineering Goals

- Automated testing
- CI/CD pipelines
- Monitoring and observability
- Analytics
- Feature flags

These are intentionally excluded from the current MVP.

---

# Final Principle

The goal of engineering at Sakeng is not simply to write code.

The goal is to build reliable digital infrastructure that serves farmers, buyers and the long-term growth of agriculture in Lesotho.

Every line of code should contribute toward:

- Simplicity
- Trust
- Performance
- Maintainability
- User value

Build software that lasts.