# MeteoriteNLQ – Technical Design (High-Level)

## 1. Next.js Application
- **Framework**: Next.js + TypeScript
- **UI Library**: Mantine (for quick, modern UI components)
- **Backend**: Basic API routes in Next.js for handling requests from the front end

## 2. Semantic Parsing with an LLM
- **LLM**: GPT (e.g., GPT-4) from OpenAI
- **Approach**: Few-shot prompting to translate plain-English queries into SQL
- **Flow**:
  1. User enters natural language query.
  2. Next.js backend sends the query (with a few-shot prompt) to GPT.
  3. GPT returns generated SQL, which is then executed.

## 3. Data Layer (PostgreSQL)
- **Hosting**: Docker container locally (production could use a managed PostgreSQL service)
- **Rationale**:
  - Easy to set up, widely adopted
  - Can scale to different data workloads (relational, document, etc.)
- **Seeding**:
  - NASA Meteorite data (CSV) imported into a `meteorites` table
  - Facilitates queries on mass, location, year of fall, etc.

---

This design provides:
- A **simple** yet **robust** foundation for a natural-language-driven UI,
- **LLM-based** SQL generation for dynamic queries,
- **Postgres** for reliable storage and easy data access.