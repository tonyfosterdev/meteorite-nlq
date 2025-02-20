# Project Notes

I want to extend my thanks for the opportunity to work on this project. It was a fun experience that let me explore interesting data and tools.

## Reconciliation of Product Spec with Current State and Timeline
I spent around 6 hours on this project, plus some additional time for cleanup and documentation. With more time, I would:

- Add safeguards to the semantic parser by implementing a Query Intent System with predefined queries. This would enhance safety and reliability.  
- Implement an Output Intent Parser to determine the user's desired output format, ensuring queries return data in the most relevant way.  
- Implement additional view types—such as CSV downloads and map visualizations (e.g., with [React Leaflet](https://react-leaflet.js.org/)). These would be chosen using the intended output from the Output Intent Parser.
- Implement pagination to efficiently handle large result sets.

This was my first time using Next.js, so some of my effort went into understanding the project structure. The Mantine-based UI was straightforward, and the semantic parsing was as well.

I also want to highlight that, under normal circumstances, I would add automated testing (unit and integration) to verify the core functionality outlined in the product specification. However, since this is a proof-of-concept rather than a production project, I opted not to include tests here. In real life, I'm a bit of a test nerd—I love them! 🤓

Thanks again for reviewing!

## OpenAI API Key Requirements

A valid OpenAI API key with available credits is required to run this project. If access is needed, please reach out for credentials.

