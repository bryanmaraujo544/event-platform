import { motion } from 'framer-motion';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

const aside = {
  hidden: {
    x: '100%',
    opacity: 0,
    display: 'block',
  },
  show: {
    x: 0,
    opacity: 1,
    display: 'block',
  },
};

interface Props {
  asideControls: any;
}

export const Sidebar = ({ asideControls }: Props) => {
  const { data } = useGetLessonsQuery();

  return (
    <motion.aside
      className="hidden z-50 w-full h-[100%] md:h-auto md:w-[348px] absolute md:relative bg-gray-700 p-6 border-l border-gray-600 md:block"
      animate={asideControls}
      variants={aside}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block ">
        Cronograma de Aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </motion.aside>
  );
};
