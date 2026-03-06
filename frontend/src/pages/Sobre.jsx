import { useState } from 'react';
import { User } from 'lucide-react';

const PROFILE_PHOTO = null;

export default function Sobre() {
  const [idioma, setIdioma] = useState('pt');

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm dark:shadow-gray-900/30 border-t-4 border-blue-600 transition-colors">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Sobre Mim</h2>
        <div className="flex gap-2">
          <button onClick={() => setIdioma('pt')} className={`px-4 py-1 rounded font-bold transition-colors ${idioma === 'pt' ? 'bg-slate-900 dark:bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>PT</button>
          <button onClick={() => setIdioma('en')} className={`px-4 py-1 rounded font-bold transition-colors ${idioma === 'en' ? 'bg-slate-900 dark:bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>EN</button>
        </div>
      </div>

      {/* Foto e Apresentação */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {PROFILE_PHOTO ? (
          <img 
            src={PROFILE_PHOTO} 
            alt="Gabriel Santiago" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg flex-shrink-0"
          />
        ) : (
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-blue-600 shadow-lg flex items-center justify-center flex-shrink-0">
            <User size={64} className="text-white/80" />
          </div>
        )}
        
        <div className="flex-1">
          {idioma === 'pt' ? (
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>Olá! Sou o Gabriel Peçanha Santiago, estudante de Engenharia de Software na PUC-Minas, com previsão de formatura em dezembro de 2027.</p>
              <p>Atuo na área de Infraestrutura TI e Telecom. Minha rotina envolve gestão de terceiros, assim como atuação direta em servidores, switchs e telefonia do Banco.</p>
            </div>
          ) : (
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>Hello! I am Gabriel Peçanha Santiago, a Software Engineering student at PUC Minas, with an expected graduation in December 2027.</p>
              <p>I work in the IT Infrastructure and Telecommunications field. My routine involves managing third-party service providers, as well as working directly with the bank’s servers, switches, and telephony systems.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
