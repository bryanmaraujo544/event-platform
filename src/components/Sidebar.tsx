import { gql, useQuery } from '@apollo/client';
import { Lesson } from './Lesson';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      availableAt
      lessonType
      title
    }
  }
`;

interface Lesson {
  id: string;
  lessonType: 'live' | 'class';
  slug: string;
  title: string;
  availableAt: string;
}

interface GetLessonsQueryResponse {
  lessons: Lesson[];
}

export const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 ">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block ">
        Cronograma de Aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, title, availableAt, lessonType, slug }) => (
          <Lesson
            key={id}
            title={title}
            slug={slug}
            availableAt={new Date(availableAt)}
            type={lessonType}
          />
        ))}
      </div>
    </aside>
  );
};
