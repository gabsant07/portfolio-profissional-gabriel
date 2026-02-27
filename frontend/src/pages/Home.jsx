import { User } from 'lucide-react';

const PROFILE_PHOTO = null;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 md:mt-20">
      {/* Foto de Perfil */}
      <div className="mb-8">
        {PROFILE_PHOTO ? (
          <img 
            src={PROFILE_PHOTO} 
            alt="Lara Carvalho" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
          />
        ) : (
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-blue-600 shadow-lg flex items-center justify-center">
            <User size={80} className="text-white/80" />
          </div>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
        Transformando Dados em Estratégia
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
        Estudante de Engenharia de Software e Product Owner apaixonada por Inteligência Artificial Generativa.
      </p>
      <div className="flex gap-4">
        <a href="/projetos" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Ver Projetos</a>
      </div>
    </div>
  );
}