import OpenAI from "openai";
import { ChatCompletionMessage, ChatCompletionMessageParam } from "openai/resources";

export interface LLMServiceInterface {
  generateSqlQuery(userQuery: string): Promise<string>;
}

export class LLMService implements LLMServiceInterface {
  async generateSqlQuery(userQuery: string): Promise<string> {
    const openai = new OpenAI();


    const messages: Array<ChatCompletionMessageParam> = [
      {
        role: "system",
        content: `
You are a helpful assistant who generates SQL queries for a PostgreSQL table named "meteorites".
Here is the schema:

CREATE TABLE meteorites (
  name TEXT,
  id INT,
  nametype TEXT,
  recclass TEXT,
  mass_g INT,
  fall TEXT,
  year INT,
  reclat NUMERIC,
  reclong NUMERIC,
  geolocation TEXT
);

All queries must be valid SQL that can run against a PostgreSQL database. Select * in all queries so all columns are returned.
Return only the SQL code, nothing else. When ordering based on mass_g or year, only consider values that are not null.
`
      },
      // --- Few-shot example #1 ---
      {
        role: "user",
        content: "How many meteorites have fallen since 1950?"
      },
      {
        role: "assistant",
        content: `
SELECT COUNT(*) AS meteorite_count
FROM meteorites
WHERE fall = 'Fell'
  AND year >= 1950;
`.trim()
      },
      // --- Few-shot example #2 ---
      {
        role: "user",
        content: "What is the most common classification of a meteorite?"
      },
      {
        role: "assistant",
        content: `
SELECT recclass, COUNT(*) AS num_meteorites
FROM meteorites
GROUP BY recclass
ORDER BY num_meteorites DESC
LIMIT 1;
`.trim()
      },
      // --- Few-shot example #3 ---
      {
        role: "user",
        content: "Show me the heaviest 10 meteorites that were found"
      },
      {
        role: "assistant",
        content: `
SELECT *
FROM meteorites
WHERE mass_g IS NOT NULL
ORDER BY mass_g DESC
LIMIT 10;
`.trim()
      },
      // --- Our new question ---
      {
        role: "user",
        content: userQuery
      },
    ];

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4o",
      store: false,
      messages,
    });

    const sql = gptResponse.choices[0]?.message?.content?.trim() || "";
    return sql;
  }

}

