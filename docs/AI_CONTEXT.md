# Sakeng Livestock — AI Context

> This document provides essential context for AI-assisted development of the Sakeng Livestock platform.  
> AI assistants should read and understand this document before generating code, proposing changes, or modifying the application.

---

# 1. Project Overview

## Name

Sakeng Livestock

## Tagline

Lesotho's Trusted Livestock Marketplace

## Description

Sakeng Livestock is a mobile-first livestock marketplace built specifically for Lesotho.

The platform connects livestock buyers and sellers by creating a trusted, structured and accessible digital marketplace for livestock trading.

Sakeng aims to reduce dependence on informal channels, improve access to quality livestock and gradually build valuable agricultural data infrastructure for Lesotho.

---

# 2. Mission

To build the trusted digital infrastructure for livestock trading in Lesotho by making it easier for farmers, buyers and businesses to discover, buy and sell quality livestock.

---

# 3. Product Philosophy

AI-assisted development must always follow these principles:

## Build For Lesotho First

The platform is designed for the realities of Lesotho:

- Lower internet penetration compared to neighbouring countries.
- Users with limited mobile data.
- Entry-level smartphones.
- Rural connectivity challenges.
- Informal agricultural trading practices.

Solutions should prioritise accessibility and practicality.

---

## Simplicity Over Complexity

Prefer simple solutions that solve real problems.

Avoid:

- Unnecessary abstractions.
- Over-engineered architecture.
- Complex dependencies.
- Features without clear user value.

The simplest solution that maintains quality is preferred.

---

## Trust By Design

Trust is a core product requirement.

Every implementation should consider:

- Transparency.
- Data accuracy.
- Security.
- Consistent user experience.
- Honest marketplace representation.

---

## Performance Is A Feature

Performance is not an optimisation step.

It is part of the product experience.

Always consider:

- Image optimisation.
- Data usage.
- Loading speed.
- Mobile performance.
- Efficient database queries.

---

# 4. Target Users

## Buyers

People looking to purchase livestock.

Examples:

- Farmers expanding their operations.
- Families purchasing livestock.
- Businesses sourcing animals.
- Agricultural organisations.

Buyers need:

- Trustworthy listings.
- Clear information.
- Easy discovery.
- Simple communication.

---

## Sellers

Individuals or organisations offering livestock.

MVP:

Listings are managed by Sakeng administrators.

Future:

Seller accounts and self-service dashboards may be introduced after marketplace validation.

---

## Administrators

The operational users of the MVP.

Responsibilities:

- Create listings.
- Manage livestock information.
- Verify selected listings.
- Update listing status.
- Maintain marketplace quality.

---

# 5. Current Product Stage

Sakeng currently has a live MVP.

The application includes:

- Public marketplace.
- Livestock browsing.
- Listing pages.
- Mobile-first interface.
- Supabase backend.
- Vercel deployment.

The current focus is:

- Production readiness.
- Data architecture.
- Database implementation.
- Performance improvements.
- Feature refinement.

---

# 6. Technology Stack

## Frontend

Framework:

- Next.js (App Router)

Language:

- TypeScript

UI:

- React
- Tailwind CSS
- shadcn/ui

Icons:

- Lucide React

---

## Backend

Database:

- Supabase PostgreSQL

Authentication:

- Supabase Auth

Storage:

- Supabase Storage

---

## Infrastructure

Hosting:

- Vercel

Domain:

- Hostinger

Version Control:

- GitHub

Development Environment:

- GitHub Codespaces

---

# 7. Design System

## Typography

Primary Font:

Google Inter

---

# Brand Colours

## Primary Brand Green

```
#20352E
```

Usage:

- Headings.
- Brand text.
- Icons.
- Premium CTA buttons.

---

## Action Green

```
#3D7A5E
```

Usage:

- Primary buttons.
- User actions.

---

## Hover Green

```
#285F44
```

Usage:

- Button hover states.

---

## Yellow Accent

```
#E5AA27
```

Usage:

- Verification badges.
- Trust indicators.

---

## Cream

```
#ECDEC2
```

Usage:

- Brand and marketing surfaces.

---

# Application Colours

Background:

```
#F8F6F2
```

Cards:

```
#FFFFFF
```

Borders:

```
#E5E7EB
```

Body Text:

```
#3F564C
```

Secondary Text:

```
#6D8077
```

---

# 8. UI Guidelines

Always:

- Build mobile-first.
- Use consistent spacing.
- Prefer reusable components.
- Keep interfaces clean.
- Maintain visual hierarchy.

Cards should:

- Float from the background.
- Have clear spacing.
- Avoid clutter.

Avoid:

- Dark themes.
- Excessive animations.
- Unnecessary visual complexity.

---

# 9. Data Philosophy

Data should be:

- Structured.
- Reliable.
- Meaningful.
- Secure.

Prefer:

- Database-driven values.
- Reference tables.
- Controlled inputs.

Avoid:

- Hardcoded business data.
- Duplicate information.
- Free text where structured data is possible.

---

# 10. Marketplace Rules

## Listing Status

Allowed statuses:

```
Available
Reserved
Sold
```

---

## Verification

Sakeng uses selective verification.

Not every listing is verified.

Verified status should only appear when verification requirements have been completed.

Never imply that all marketplace listings are verified.

---

# 11. Development Principles

AI-generated code must:

- Follow existing patterns.
- Reuse components.
- Maintain naming conventions.
- Preserve architecture.
- Avoid unnecessary dependencies.

Before creating new functionality:

Consider:

1. Does this solve a real user problem?
2. Does it align with Sakeng principles?
3. Can existing components be reused?
4. Does it maintain simplicity?

---

# 12. Coding Conventions

## Components

Use:

```
PascalCase
```

Example:

```
ListingCard.tsx
```

---

## Functions

Use:

```
camelCase
```

Example:

```
getListings()
```

---

## Database

Use:

```
snake_case
```

Example:

```
listing_images
created_at
seller_id
```

---

## Routes

Use:

```
kebab-case
```

Example:

```
/livestock
/request-livestock
```

---

# 13. Folder Philosophy

Expected structure:

```
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

Organise code by responsibility.

Avoid placing business logic directly inside UI components.

---

# 14. AI Behaviour Guidelines

When generating solutions:

DO:

- Ask if requirements are unclear.
- Explain architectural decisions.
- Follow existing patterns.
- Prioritise maintainability.

DO NOT:

- Rewrite working code unnecessarily.
- Introduce new libraries without reason.
- Create features outside the product roadmap.
- Ignore existing documentation.

---

# 15. Final Instruction To AI Assistants

You are contributing to Sakeng Livestock.

Your goal is not simply to generate code.

Your goal is to help build:

- A trusted marketplace.
- A simple user experience.
- Reliable software.
- Sustainable digital infrastructure for Lesotho.

Always prioritise:

1. User value.
2. Simplicity.
3. Trust.
4. Performance.
5. Maintainability.

Build with the future of Sakeng in mind.