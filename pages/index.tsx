import { useState } from 'react';
import { Table, Text, TextInput, Button, Title, Container, Space, Flex, Box } from '@mantine/core';
import { Meteorite } from './dto/Meteorite';

// Some helper functions for dealing with possibly missing meteorite properties (some values are null)
const tdIfExists = (item: string | number | undefined | null) => item !== undefined ? <Table.Td>{item}</Table.Td> : undefined;
const thIfExists = (item: string | number | undefined | null, header: string) => item !== undefined ? <Table.Th>{header}</Table.Th> : undefined;
const rowMapper = (row: Meteorite, index: number) =>
  <Table.Tr key={row.id ?? index}>
    {tdIfExists(row.id)}
    {tdIfExists(row.name)}
    {tdIfExists(row.nameType)}
    {tdIfExists(row.classification)}
    {tdIfExists(row.massGrams)}
    {tdIfExists(row.fall)}
    {tdIfExists(row.year)}
    {tdIfExists(row.latitude)}
    {tdIfExists(row.longitude)}
  </Table.Tr>

export default function HomePage() {
  const [inputValue, setInputValue] = useState('');  // The input value
  const [data, setData] = useState<Meteorite[]>([]);  // The data to display
  const [loading, setLoading] = useState<boolean>(false);  // A loading indicator
  const [errorMessage, setErrorMessage] = useState<string>();  // Error message, if one occurs

  // This is where we fetch data with the user's input.
  // In the future, a similar method could be used to get the user's output intent.
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/data?query=${encodeURIComponent(inputValue)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { items } = await response.json();
      setData(items);
    } catch (error) {
      setErrorMessage("An error occurred, please try again. If it continues, please modify your query.")
    } finally {
      setLoading(false);
    }
  };

  const table = !errorMessage && data.length ? (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {thIfExists(data[0].id, "Id")}
          {thIfExists(data[0].name, "Name")}
          {thIfExists(data[0].nameType, "Name Type")}
          {thIfExists(data[0].classification, "Classification")}
          {thIfExists(data[0].massGrams, "Mass (g)")}
          {thIfExists(data[0].fall, "Fell/Found")}
          {thIfExists(data[0].year, "Year")}
          {thIfExists(data[0].latitude, "Latitude")}
          {thIfExists(data[0].longitude, "Longitude")}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{data.map(rowMapper)}</Table.Tbody>
    </Table>
  ) : null;

  return (
    <Container size="lg" mt="xl">
      <Title order={2} mb="md">
        ☄️ MeteoriteNLQ - Natural Language Querying of NASA's meteorite dataset.
      </Title>


      <Text>
        This project aims to demonstrate how we can leverage LLMs to create natural language querying of NASA's meteorite strike data. It uses a process of
        LLM semantic parsing with OpenAI. If you're using this for scientific research (lol), make sure to verify your results. Note: some of the results could be incorrect (meteor-wrong 😎).
      </Text>

      <Space h="md" />

      <Text>
        Here are some examples: "Show me the 10 oldest meteorites", "Show me the meteorites that fell between 1980 and 1983", or "Show me the meteorites that fell between 1980 and 1983 that weigh at least 6000g".
      </Text>

      <Space h="md" />


      <Text>
        Type your question/statement in the field below and click the "Ask" button. Unfortunately, hitting "Enter" or "Return" will not submit your input. It's on our TODO list.
      </Text>

      <Space h="md" />

      <Flex gap="md" w="100%">
        <TextInput
          placeholder="What would you like to know?"
          style={{ flex: 1 }}
          value={inputValue}
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />
        <Button onClick={fetchData} loading={loading} loaderProps={{ type: 'dots' }}>Ask</Button>
      </Flex>

      <Space h="md" />
      { /* If there's an error, show it, otherwise show the table. */}
      {errorMessage || table}

      <Space h="md" />
    </Container >
  );
}
