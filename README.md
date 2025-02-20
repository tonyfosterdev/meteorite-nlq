# ☄️ MeteoriteNLQ

MeteoriteNLQ is a web application that enables users to ask natural language questions about meteorite data and view results in multiple formats (tables, maps, CSV). This project leverages Next.js, Mantine for UI, and a semantic parsing service that translates queries into SQL—connecting to a local PostgreSQL database (seeded with NASA’s meteorite dataset).

## Documentation

- [Product Specification](./docs/PRODUCT_SPEC.md)
- [Technical Design](./docs/TECHNICAL_DESIGN.md)
- [Project Notes](./docs/PROJECT_NOTES.md)

## Requirements

- Node.js v20 (with npm)
- Docker (with Docker Compose)
- An OpenAI API key with credits (See this [Project Notes section](docs/PROJECT_NOTES.md#a-note-on-openai-api-keys) for information on this.) 

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/tonyfosterdev/meteorite-nlq.git
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
   DATABASE_URL=postgres://meteorite-user:password123@localhost:5432/meteorites
   OPENAI_API_KEY="your_openai_key"
   ```
1. **Run the Application**
   ```bash
   npm run dev
   ```

The app should now be available at http://localhost:3000.


Enjoy asking questions about meteorites in natural language!




   