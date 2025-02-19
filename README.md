# MeteoriteNLQ

MeteoriteNLQ is a web application that enables users to ask natural language questions about meteorite data and view results in multiple formats (tables, maps, CSV). This project leverages Next.js, Mantine for UI, and a semantic parsing layer that translates queries into SQL—connecting to a local PostgreSQL database (seeded with NASA’s meteorite dataset).

## Documentation

- [Product Specification](./docs/PRODUCT_SPEC.md)
- [Technical Design](./docs/TECHNICAL_DESIGN.md)

## Requirements

- **Node.js v20** (with npm)
- **Docker** (with **Docker Compose**)

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/YourUsername/meteorite-nlq.git
   cd meteorite-nlq
   ```
1. **Install node dependencies**
   ```bash
   npm install
   ```
1. **Start the database**
   ```bash
   docker compose up -d
   ```
   This spins up a local PostgreSQL instance with the meteorite data seeded.
1. **Create .env.local**
In the project root, create a file named `.env.local` containing environment variables:

   ```bash
DATABASE_URL="postgres://your_user:your_password@localhost:5432/your_db"
   OPENAI_API_KEY="your_openai_key"
```
1. **Run the Application**
   ```bash
   npm run dev
   ```

The app should now be available at http://localhost:3000.


Enjoy asking questions about meteorites in natural language!




   