# Lesson 1

## PostgreSQL Architecture

Flow

Client

↓

Backend

↓

Prisma ORM

↓

PostgreSQL Server

↓

Database

↓

Schema

↓

Tables

↓

Rows


| Prisma Concept | Real Meaning                              |
| -------------- | ----------------------------------------- |
| Prisma         | ORM (translator between app and database) |
| Prisma Client  | Auto-generated type-safe query builder    |
| Schema         | Blueprint of your database                |
| DATABASE_URL   | Connection string to the database         |
| `.env`         | Stores sensitive configuration securely   |
