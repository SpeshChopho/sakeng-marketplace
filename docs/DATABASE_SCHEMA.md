# Note

This document represents both the current MVP schema and the intended direction of the platform.

Some tables, entities and features described in this document are planned for future phases and may not yet exist in the production database.

Always treat the live database schema as the source of truth for implementation.
# Sakeng Livestock — Database Schema

> This document describes the database architecture for Sakeng Livestock. It provides an overview of all tables, relationships, business rules and data principles that power the platform.

---

# Database Philosophy

The Sakeng database is designed around the following principles:

- Structured and reliable data.
- Simplicity over complexity.
- Performance and scalability.
- Minimal data duplication.
- Database-driven business rules.
- Future extensibility.

---

# Database Overview

The platform currently consists of the following domains:

1. Authentication
2. User Profiles
3. Livestock Listings
4. Listing Images
5. Categories and Breeds
6. Geographic Data
7. Verification
8. Livestock Requests

---

# Entity Relationship Overview

```text
auth.users
    ↓
profiles
    ↓
listings
    ↓
listing_images

categories
    ↓
breeds
    ↓
livestock_types

districts

verification_requests

livestock_requests
```

---

# Table: profiles

## Purpose

Stores additional information about authenticated users.

## Columns

| Column | Type | Description |
|---------|------|-------------|
| id | uuid | Primary key. References auth.users.id |
| full_name | text | User's full name |
| phone | text | Phone number |
| district_id | uuid | User district |
| avatar_url | text | Profile image |
| role | text | User role |
| created_at | timestamptz | Record creation |
| updated_at | timestamptz | Last update |

---

## Relationships

```text
profiles
    └── has many listings
```

---

# Table: districts

## Purpose

Stores districts within Lesotho.

## Columns

| Column | Type |
|---------|------|
| id | uuid |
| name | text |
| created_at | timestamptz |

---

## Initial Districts

- Maseru
- Leribe
- Berea
- Mafeteng
- Mohale's Hoek
- Quthing
- Qacha's Nek
- Mokhotlong
- Butha-Buthe
- Thaba-Tseka

---

# Table: categories

## Purpose

Top-level livestock categories.

Examples:

- Cattle
- Sheep
- Goats
- Poultry
- Pigs
- Horses
- Donkeys

---

## Columns

| Column | Type |
|---------|------|
| id | uuid |
| name | text |
| slug | text |
| created_at | timestamptz |

---

# Table: breeds

## Purpose

Stores breeds belonging to a category.

## Columns

| Column | Type |
|---------|------|
| id | uuid |
| category_id | uuid |
| name | text |
| created_at | timestamptz |

---

## Relationships

```text
categories
    └── breeds
```

---

# Table: livestock_types

## Purpose

Optional sub-classification of livestock.

Examples:

Poultry:

- Broilers
- Layers
- Indigenous

Cattle:

- Dairy
- Beef

---

## Columns

| Column | Type |
|---------|------|
| id | uuid |
| breed_id | uuid |
| name | text |
| created_at | timestamptz |

---

# Table: listings

## Purpose

Stores livestock listings displayed on the marketplace.

---

## Columns

| Column | Type |
|---------|------|
| id | uuid |
| seller_id | uuid |
| category_id | uuid |
| breed_id | uuid |
| type_id | uuid |
| district_id | uuid |
| title | text |
| description | text |
| price | numeric |
| quantity | integer |
| age | text |
| sex | text |
| status | text |
| is_verified | boolean |
| is_featured | boolean |
| created_at | timestamptz |
| updated_at | timestamptz |

---

# Listing Status

Allowed values:

```text
Available
Reserved
Sold
```

---

# Relationships

```text
profiles
    └── listings

categories
    └── listings

breeds
    └── listings

districts
    └── listings
```

---

# Business Rules

- A listing belongs to one seller.
- A listing belongs to one category.
- A listing may have one breed.
- A listing may have one type.
- A listing belongs to one district.
- Listings default to Available.
- Sold listings remain visible for historical purposes.

---

# Table: listing_images

## Purpose

Stores images attached to listings.

---

## Columns

| Column | Type |
|---------|------|
| id | uuid |
| listing_id | uuid |
| image_url | text |
| sort_order | integer |
| created_at | timestamptz |

---

## Business Rules

- Maximum 3 images per listing.
- Images should be compressed before upload.
- Images stored in Supabase Storage.
- Images delivered through CDN.

---

# Relationships

```text
listings
    └── listing_images
```

---

# Table: verification_requests

## Purpose

Tracks requests for Sakeng Verified status.

---

## Columns

| Column | Type |
|---------|------|
| id | uuid |
| listing_id | uuid |
| status | text |
| notes | text |
| verified_at | timestamptz |
| created_at | timestamptz |

---

## Status Values

```text
Pending
Approved
Rejected
```

---

# Business Rules

- Not every listing is verified.
- Verification is selective.
- Verification status must never be implied by default.

---

# Table: livestock_requests

## Purpose

Stores buyer requests for livestock not currently available.

---

## Columns

| Column | Type |
|---------|------|
| id | uuid |
| full_name | text |
| phone | text |
| category_id | uuid |
| breed_id | uuid |
| quantity | integer |
| district_id | uuid |
| notes | text |
| status | text |
| created_at | timestamptz |

---

## Status Values

```text
Open
Matched
Closed
```

---

# Relationships

```text
categories
    └── livestock_requests

breeds
    └── livestock_requests

districts
    └── livestock_requests
```

---

# User Roles

## Admin

Responsibilities:

- Create listings
- Edit listings
- Manage verification
- Moderate content
- Update statuses

---

## User

Responsibilities:

- Browse listings
- Submit requests
- Contact sellers

---

# Index Recommendations

Create indexes for:

- listings.category_id
- listings.breed_id
- listings.district_id
- listings.status
- listings.created_at
- livestock_requests.category_id
- livestock_requests.status

---

# Security Principles

- Row Level Security enabled.
- Principle of least privilege.
- Validate all user inputs.
- Use Supabase Auth.
- Protect service role keys.
- Never expose sensitive information.

---

# Future Tables

The following tables may be introduced in future phases:

- seller_profiles
- conversations
- favourites
- notifications
- transport_requests
- veterinary_directory
- financing_partners
- marketplace_analytics

These tables are intentionally excluded from the MVP schema.

---

# Schema Version

Current Version:

```text
1.0.0
```

Last Updated:

```text
July 2026
```

---

# Final Principle

The database should remain simple, structured and scalable.

Every new table or relationship should solve a real business problem and align with the long-term mission of Sakeng Livestock.