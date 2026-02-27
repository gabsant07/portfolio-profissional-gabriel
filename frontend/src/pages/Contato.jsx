import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, MessageCircle, MapPin } from 'lucide-react';

export default function Contato() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('enviando');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id_aqui', 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id_aqui', 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_aqui'
    )
      .then((result) => {
          console.log(result.text);
          setStatus('sucesso');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('erro');
      });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-b-2 border-gray-100 dark:border-gray-700 pb-4">
        Vamos Conversar?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm dark:shadow-gray-900/30 border-t-4 border-slate-900 dark:border-blue-500 transition-colors">
        
        {/* Coluna da Esquerda: Informações e Ícones */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Informações de Contato</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Estou sempre aberta a discutir novos projetos de Produto, oportunidades na área de Inteligência Artificial ou parcerias estratégicas. Atualmente baseada em Belo Horizonte, mas disponível para conexões remotas.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:lara.carvalho@email.com" className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full"><Mail size={24} className="text-blue-600 dark:text-blue-400"/></div>
              <span className="font-medium">lara.carvalho@email.com</span>
            </a>
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full"><Linkedin size={24} className="text-blue-600 dark:text-blue-400"/></div>
              <span className="font-medium">LinkedIn Profile</span>
            </a>
            <a href="https://github.com/LaraCarvalho00" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full"><Github size={24} className="text-blue-600 dark:text-blue-400"/></div>
              <span className="font-medium">GitHub /LaraCarvalho00</span>
            </a>
            <a href="https://wa.me/5531999999999" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full"><MessageCircle size={24} className="text-blue-600 dark:text-blue-400"/></div>
              <span className="font-medium">WhatsApp</span>
            </a>
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full"><MapPin size={24} className="text-blue-600 dark:text-blue-400"/></div>
              <span className="font-medium">Belo Horizonte, MG</span>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário EmailJS */}
        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Envie uma Mensagem</h3>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Seu Nome</label>
              <input type="text" name="user_name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="Lara Carvalho" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Seu E-mail</label>
              <input type="email" name="user_email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
              <textarea name="message" required rows="4" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="Como posso ajudar?"></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'enviando'}
              className="w-full bg-slate-900 dark:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-600"
            >
              {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {status === 'sucesso' && <p className="text-green-600 dark:text-green-400 text-sm font-medium text-center mt-2">Mensagem enviada com sucesso!</p>}
            {status === 'erro' && <p className="text-red-600 dark:text-red-400 text-sm font-medium text-center mt-2">Erro ao enviar. Tente novamente.</p>}
          </form>
        </div>

      </div>
    </div>
  );
}