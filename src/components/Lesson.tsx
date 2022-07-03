import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = ({ type, availableAt, slug }: LessonProps) => {
  const isLessonAvailable = isPast(availableAt);
  const { slug: slugParams } = useParams<{ slug: string }>();

  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'MM",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === slugParams;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          {
            'bg-green-500': isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'flex items-center gap-2 text-sm text-blue-500 font-medium',
                {
                  'text-white': isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={classNames(
                'flex items-center gap-2 text-sm text-orange-500  font-medium',
                {
                  'text-white': isActiveLesson,
                }
              )}
            >
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs rounded py-[0.125rem] px-2 text-white font-bold border border-green-300',
              {
                'border-white': isActiveLesson,
              }
            )}
          >
            {type === 'live' ? 'AO VIVO' : 'Aula Prática'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">Abertura do evento</strong>
      </div>
    </Link>
  );
};
