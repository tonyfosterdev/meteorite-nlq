# ☄️ MeteoriteNLQ

**1-Page Product Specification**

## Overview
**MeteoriteNLQ** is a web application that allows users to query a comprehensive meteorite catalog using natural language. The motivation comes from a conversation with a five-year-old who, upon hearing about the meteorite dataset, immediately asked, “What was the biggest?” This highlights the importance of a system that can interpret plain-English queries and return data in the most intuitive format—be it a table, a map, or a downloadable CSV.

## Target Audience
- **Curious Kids** (like the five-year-old who wants fun facts).
- **Nerds, Data Scientists, Astronomy Enthusiasts** who crave flexible data exploration.
- **Educators & Hobbyists** who want to easily answer “how many,” “which year,” or “where” queries without learning SQL.

## Key Features
1. **Natural Language Query**  
   - Single text box for questions, e.g., _“Show me the 10 largest meteorites ever found.”_  
   - “Ask” button triggers the query.

2. **Flexible Output Format**  
   - **Table (Default)** – A clean, paginated display (largest meteorites, years, etc.).  
   - **Map Pins** – If the query mentions “on a map,” display markers for the relevant meteorites.  
   - **CSV Download** – If the user requests CSV, generate a downloadable file (e.g., _“in a CSV file”_).

3. **Smart NL to Query Translation**  
   - Converts user-friendly questions into underlying data queries.  
   - Summaries or partial clarifications provided for ambiguous questions.

4. **Responsive, Accessible UI**  
   - Minimalistic design (fewer distractions, large text options for kids).  
   - Clear “Ask” button and feedback messages (e.g., “Fetching results…”).

## User Flow
1. **Input Question**  
   - User types, for example: “Which meteorites fell the year I was born?”
2. **Process**  
   - System parses the query, constructs a statement, executes it.
3. **Result Display**  
   - Defaults to a **table** of data.  
   - If “map” is mentioned, displays pins.  
   - If “CSV” is mentioned, provides a download link.

## Success Criteria
- **Immediate Engagement**: A child can ask “What’s the biggest meteorite?” and see a straightforward answer.
- **Versatility**: Data scientists can fetch thousands of rows, while hobbyists ask simple questions and see tables or maps.
- **Simplicity**: The UI remains intuitive for all, from five-year-olds to advanced users.