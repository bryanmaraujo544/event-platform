import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { client } from './lib/apollo';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <ul>
      {data?.lessons.map(({ id, title }) => (
        <li key={id}>
          <p>{id}</p>
          <p>{title}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
