export default function Experiencias() {
  const experiencias = [
    {
      empresa: "Atuação em Produto & IA Generativa",
      cargo: "Product Owner / Especialista em IA",
      periodo: "Atualmente",
      descricao: "Liderança de produtos com foco em Inteligência Artificial Generativa. Desenvolvimento ativo na plataforma IBM Watson, análise de dados conversacionais utilizando Python e exploração prática de Large Language Models (LLMs). Condução de projetos estratégicos focados em precificação, market insights e roadmap de novas funcionalidades de IA, como os projetos 'Mapa de Calor' e 'Estranho no Ninho'."
    },
    {
      empresa: "4 Laços Paperie",
      cargo: "Co-fundadora & Estrategista de Negócios",
      periodo: "Jan 2026 - Presente",
      descricao: "Gestão estratégica, estruturação de e-commerce e alinhamento de vendas multiplataforma (Shopee, Mercado Livre e TikTok Shop) para uma loja online de papelaria criativa. Responsável direta pela criação do plano de negócios e pela identidade visual da marca."
    },
    {
      empresa: "Pontifícia Universidade Católica (PUC-Minas)",
      cargo: "Graduação em Engenharia de Software",
      periodo: "Fev 2023 - Dez 2026",
      descricao: "Formação acadêmica focada no ciclo completo de desenvolvimento de software, arquitetura de sistemas e metodologias ágeis. Atualmente em fase de desenvolvimento do Trabalho de Conclusão de Curso (TCC) aplicando normas ABNT e metodologias de pesquisa."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-b-2 border-gray-100 dark:border-gray-700 pb-4">
        Experiências Profissionais e Acadêmicas
      </h2>
      
      <div className="space-y-8">
        {experiencias.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm dark:shadow-gray-900/30 border-l-4 border-slate-900 dark:border-blue-500 hover:shadow-md dark:hover:shadow-gray-900/50 hover:border-blue-600 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{exp.cargo}</h3>
              <span className="text-sm font-bold text-slate-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                {exp.periodo}
              </span>
            </div>
            
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{exp.empresa}</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}