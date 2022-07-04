import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';

export const Subscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const navigate = useNavigate();

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();

    await createSubscriber({
      variables: {
        email,
        name,
      },
    });
    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-between gap-6 mt-20 md:flex-row md:gap-">
        <div className="max-w-[640px] px-4 flex flex-col">
          <Logo className="self-center md:self-start w-48 md:w-auto" />
          <h1 className="mt-8 text-2xl leading-tight text-center sm:text-3xl md:text-[2.5rem] md:text-left">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-sm text-gray-200 leading-relaxed text-center md:text-[1rem] md:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border-t border-gray-500 w-full md:border md:rounded md:w-auto">
          <strong className="text-2xl mb-6 block text-center md:text-left">
            Increva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/assets/code-mockup.png" alt="" className="mt-10" />
    </div>
  );
};
