document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (!main) return;
  let conteudoOriginal = main.innerHTML;

  // ============================================================
  // Base de dados expandida — descrições, aulas detalhadas,
  // tópicos com explicação e reviews variados por curso.
  // ============================================================
  const dadosCursos = {
    'Química': {
      descricao: 'Um mergulho profundo na ciência da matéria. O curso parte da estrutura atômica e da Tabela Periódica, atravessa as ligações químicas e a geometria molecular, aprofunda em estequiometria, termoquímica e cinética, e culmina na introdução à química orgânica moderna. Cada módulo combina teoria sólida com experimentos virtuais, exercícios resolvidos e projetos aplicados, preparando o aluno para o ENEM, vestibulares concorridos e para a iniciação científica em laboratórios acadêmicos e industriais.',
      duracao: '60 horas',
      aulas: '42 aulas',
      nivel: 'Iniciante ao Intermediário',
      topicos: [
        { titulo: 'Estrutura Atômica e Tabela Periódica', descricao: 'Compreenda os modelos atômicos de Dalton a Schrödinger, distribuição eletrônica em subníveis e como a posição do elemento na tabela revela suas propriedades químicas e físicas.' },
        { titulo: 'Ligações Químicas e Geometria Molecular', descricao: 'Domine ligações iônicas, covalentes e metálicas. Aprenda a teoria VSEPR para prever a geometria de moléculas e correlacionar geometria com polaridade e propriedades.' },
        { titulo: 'Estequiometria Avançada', descricao: 'Resolva cálculos com reagente limitante, rendimento, pureza e reações em sequência. Aplicação em problemas industriais e de vestibular.' },
        { titulo: 'Termoquímica e Cinética', descricao: 'Entenda entalpia, entropia, energia livre de Gibbs e a Lei de Hess. Estude a velocidade das reações, fatores que a influenciam e equações de ordem.' },
        { titulo: 'Introdução à Química Orgânica', descricao: 'Conheça hidrocarbonetos, funções oxigenadas e nitrogenadas, isomeria e os principais mecanismos de reação que regem a química do carbono.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'Boas-vindas e modelos atômicos', duracao: '38 min', descricao: 'Visão geral do curso, evolução dos modelos atômicos e exercício diagnóstico para mapear seu nível inicial.' },
        { num: '02', titulo: 'Distribuição eletrônica e Diagrama de Linus Pauling', duracao: '52 min', descricao: 'Passo a passo da distribuição eletrônica em subníveis, com 12 exercícios resolvidos no formato ENEM.' },
        { num: '03', titulo: 'Tabela Periódica: propriedades periódicas', duracao: '47 min', descricao: 'Raio atômico, eletronegatividade, eletroafinidade e energia de ionização — como cada uma varia na tabela e por quê.' },
        { num: '04', titulo: 'Ligações iônicas e covalentes na prática', duracao: '55 min', descricao: 'Construção de fórmulas, regra do octeto, exceções e identificação do tipo de ligação a partir da diferença de eletronegatividade.' },
        { num: '05', titulo: 'Geometria molecular e polaridade', duracao: '49 min', descricao: 'Aplicação da teoria VSEPR em moléculas reais e relação entre geometria, polaridade e solubilidade.' },
        { num: '06', titulo: 'Cálculo estequiométrico do zero ao avançado', duracao: '1h 12 min', descricao: 'Mol, massa molar, reagente limitante, excesso, rendimento e pureza com problemas contextualizados.' }
      ],
      reviews: [
        { nome: 'Beatriz Almeida', iniciais: 'BA', nota: 5, data: 'Há 2 semanas', comentario: 'O módulo de estequiometria é o melhor que já vi. Os exercícios resolvidos passo a passo destravaram totalmente a matéria pra mim, consegui passar na primeira fase do vestibular.' },
        { nome: 'Lucas Ferreira', iniciais: 'LF', nota: 5, data: 'Há 1 mês', comentario: 'Prof. João Silva explica geometria molecular com uma clareza absurda. As animações 3D ajudam demais a visualizar polaridade.' },
        { nome: 'Camila Rocha', iniciais: 'CR', nota: 4, data: 'Há 2 meses', comentario: 'Muito completo. Senti falta de mais exercícios de termoquímica, mas o conteúdo de orgânica compensou. Recomendo!' }
      ]
    },

    'Programação em Java': {
      descricao: 'Domine a linguagem que move o mundo corporativo. O curso vai além da sintaxe: você aprende orientação a objetos sólida, padrões de projeto, programação funcional com Streams e Lambdas, persistência com JPA/Hibernate, construção de APIs REST com Spring Boot e arquitetura de microserviços. Tudo com testes automatizados (JUnit + Mockito) e boas práticas de Clean Code, garantindo que você construa aplicações escaláveis, manuteníveis e prontas para produção em ambientes corporativos exigentes.',
      duracao: '120 horas',
      aulas: '85 aulas',
      nivel: 'Avançado',
      topicos: [
        { titulo: 'Lógica com Orientação a Objetos', descricao: 'Encapsulamento, herança, polimorfismo e composição aplicados em cenários reais. SOLID e Clean Code do início ao fim.' },
        { titulo: 'Java Streams e Lambdas', descricao: 'Programação funcional moderna em Java. Refatore loops imperativos para pipelines declarativos, legíveis e performáticos.' },
        { titulo: 'Persistência de Dados com JPA/Hibernate', descricao: 'Mapeamento ORM, relacionamentos, JPQL, performance, lazy/eager loading e os erros mais comuns em produção.' },
        { titulo: 'Arquitetura de Microserviços', descricao: 'Spring Cloud, comunicação síncrona/assíncrona, service discovery, API Gateway, resiliência com Circuit Breaker.' },
        { titulo: 'Testes Unitários com JUnit', descricao: 'TDD na prática, mocks com Mockito, cobertura, testes de integração e pipelines de CI com testes automáticos.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'Setup profissional: JDK, Maven e IntelliJ', duracao: '42 min', descricao: 'Configure um ambiente Java pronto para mercado, com atalhos de produtividade e gestão de dependências.' },
        { num: '02', titulo: 'OO de verdade: além de classes e objetos', duracao: '1h 08 min', descricao: 'Modelagem de domínio rico, valor vs entidade, imutabilidade e armadilhas clássicas da herança.' },
        { num: '03', titulo: 'Streams API na prática', duracao: '58 min', descricao: 'map, filter, reduce, collectors customizados e quando NÃO usar streams — com benchmarks reais.' },
        { num: '04', titulo: 'Spring Boot do zero: criando uma API REST', duracao: '1h 25 min', descricao: 'Construa uma API completa com controllers, services, repositories e validação com Bean Validation.' },
        { num: '05', titulo: 'JPA/Hibernate: relacionamentos e performance', duracao: '1h 17 min', descricao: 'OneToMany, ManyToMany, problema do N+1, fetch joins e tuning de queries com SQL nativo.' },
        { num: '06', titulo: 'Testes com JUnit 5 e Mockito', duracao: '54 min', descricao: 'TDD aplicado a um caso de uso real, isolando dependências externas com mocks e spies.' }
      ],
      reviews: [
        { nome: 'Rafael Tavares', iniciais: 'RT', nota: 5, data: 'Há 3 semanas', comentario: 'Trabalho com PHP há 6 anos e migrei pra Java por causa desse curso. A parte de Spring Boot é cirúrgica, fui contratado como pleno em 2 meses.' },
        { nome: 'Juliana Prado', iniciais: 'JP', nota: 5, data: 'Há 1 mês', comentario: 'A profa Maria Santos não enrola. Entrega padrões de projeto e arquitetura hexagonal de um jeito que finalmente fez sentido pra mim.' },
        { nome: 'Diego Nunes', iniciais: 'DN', nota: 4, data: 'Há 2 meses', comentario: 'Excelente para quem já programa. Se você é total iniciante, recomendo fazer um curso de lógica antes — esse aqui voa.' }
      ]
    },

    'Design Gráfico': {
      descricao: 'Transforme ideias em comunicação visual de alto impacto. Você aprenderá os fundamentos da percepção visual (Gestalt, hierarquia, ritmo), teoria das cores aplicada à marca, tipografia para tela e impressão e composição profissional. Tudo isso usando as ferramentas líderes do mercado — Adobe Photoshop, Illustrator, InDesign e Figma — para entregar peças prontas para social media, identidade visual completa e protótipos navegáveis. Ao final, você sai com um portfólio sólido para começar a atender clientes reais.',
      duracao: '45 horas',
      aulas: '30 aulas',
      nivel: 'Intermediário',
      topicos: [
        { titulo: 'Teoria das Cores e Tipografia', descricao: 'Modelos RGB/CMYK, harmonias cromáticas, psicologia das cores e seleção tipográfica para diferentes contextos de marca.' },
        { titulo: 'Composição e Gestalt', descricao: 'Princípios da percepção visual, equilíbrio, ritmo, contraste e hierarquia para guiar o olhar do espectador.' },
        { titulo: 'Identidade Visual Corporativa', descricao: 'Da pesquisa à construção do logotipo, paleta, tipografia, grid e manual de marca finalizado em PDF profissional.' },
        { titulo: 'Design para Social Media', descricao: 'Templates eficientes para Instagram, LinkedIn e TikTok. Adaptação multiformato e produção em escala.' },
        { titulo: 'Prototipagem no Figma', descricao: 'Auto-layout, componentes, variantes, design tokens e protótipos interativos para apresentar ao cliente ou ao desenvolvedor.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'O olhar do designer', duracao: '35 min', descricao: 'Como ver o mundo como designer: análise crítica de peças famosas e exercícios de observação.' },
        { num: '02', titulo: 'Cores que vendem', duracao: '48 min', descricao: 'Roda cromática, complementares, análogas e como escolher uma paleta que comunica o valor da marca.' },
        { num: '03', titulo: 'Tipografia: a voz silenciosa do design', duracao: '52 min', descricao: 'Famílias tipográficas, pareamento, hierarquia e os erros que matam um layout.' },
        { num: '04', titulo: 'Construindo um logotipo do zero', duracao: '1h 10 min', descricao: 'Briefing, brainstorm, sketch, vetorização no Illustrator e refinamento — projeto real entregável.' },
        { num: '05', titulo: 'Figma: do wireframe ao protótipo', duracao: '1h 02 min', descricao: 'Auto-layout, componentes reutilizáveis e prototipagem com transições e overlays.' },
        { num: '06', titulo: 'Portfólio que conquista clientes', duracao: '44 min', descricao: 'Como apresentar seus projetos no Behance e LinkedIn para atrair as primeiras oportunidades.' }
      ],
      reviews: [
        { nome: 'Marina Vitória', iniciais: 'MV', nota: 5, data: 'Há 2 semanas', comentario: 'Comecei do zero e em 3 meses já estava fechando freelas de identidade visual. A aula de tipografia é divisor de águas.' },
        { nome: 'Henrique Soares', iniciais: 'HS', nota: 5, data: 'Há 1 mês', comentario: 'Prof. Carlos é generoso com o conhecimento. As mentorias ao vivo me ajudaram a ajustar o portfólio.' },
        { nome: 'Patrícia Lemos', iniciais: 'PL', nota: 4, data: 'Há 3 meses', comentario: 'Conteúdo excelente. Adoraria mais aulas de motion design, mas o foco em Figma compensa muito.' }
      ]
    },

    'Marketing Digital': {
      descricao: 'Aprenda a construir uma máquina de aquisição de clientes do zero. O curso cobre estratégia de funil completo (topo, meio e fundo), SEO técnico e de conteúdo, Google Ads e Meta Ads do básico ao avançado, e-mail marketing com automação, copywriting persuasivo e leitura de métricas no Google Analytics 4. Você sai apto a planejar, executar e otimizar campanhas com ROI mensurável, seja para sua própria empresa ou prestando serviço como especialista.',
      duracao: '50 horas',
      aulas: '36 aulas',
      nivel: 'Iniciante',
      topicos: [
        { titulo: 'Estratégia de Funil de Vendas', descricao: 'Mapeie a jornada do cliente, defina objetivos por etapa e escolha os canais certos para cada momento.' },
        { titulo: 'SEO técnico e de conteúdo', descricao: 'Pesquisa de palavras-chave, otimização on-page, link building ético e como ranquear no Google em 2024.' },
        { titulo: 'Google Ads e Meta Ads na prática', descricao: 'Estruturação de campanhas, segmentação avançada, otimização de CPA e escala lucrativa.' },
        { titulo: 'E-mail marketing e automação', descricao: 'Construção de lista, sequências de nutrição, segmentação comportamental e métricas de e-mail.' },
        { titulo: 'Copywriting que converte', descricao: 'Headlines magnéticas, gatilhos mentais éticos e estrutura AIDA aplicada a anúncios e landing pages.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'O mindset do profissional de marketing', duracao: '32 min', descricao: 'Por que pensar em ROI desde o primeiro dia muda completamente seus resultados.' },
        { num: '02', titulo: 'Persona, oferta e proposta de valor', duracao: '45 min', descricao: 'Construa uma persona real (não fictícia) e uma oferta irresistível para ela.' },
        { num: '03', titulo: 'SEO on-page do zero', duracao: '58 min', descricao: 'Title, meta description, headings, intenção de busca e otimização técnica de uma página real.' },
        { num: '04', titulo: 'Sua primeira campanha no Google Ads', duracao: '1h 04 min', descricao: 'Criação passo a passo de uma campanha de pesquisa com palavras negativas e extensões.' },
        { num: '05', titulo: 'Anúncios no Meta Ads que param o scroll', duracao: '1h 12 min', descricao: 'Segmentação, criativos, testes A/B e leitura do Gerenciador de Anúncios.' },
        { num: '06', titulo: 'GA4: enxergando o que importa', duracao: '49 min', descricao: 'Eventos, conversões, atribuição e dashboards customizados para tomar decisão baseada em dado.' }
      ],
      reviews: [
        { nome: 'Thiago Bernardes', iniciais: 'TB', nota: 5, data: 'Há 1 semana', comentario: 'Apliquei o que aprendi no negócio da minha família e dobramos o faturamento em 4 meses. Surreal.' },
        { nome: 'Larissa Gomes', iniciais: 'LG', nota: 5, data: 'Há 1 mês', comentario: 'A aula de copywriting transformou meus anúncios. CTR triplicou no primeiro teste A/B.' },
        { nome: 'Eduardo Pinheiro', iniciais: 'EP', nota: 4, data: 'Há 2 meses', comentario: 'Curso muito atual, sem fórmulas mágicas. A profa Ana é direta e baseada em dado.' }
      ]
    },

    'História': {
      descricao: 'Atravesse os principais períodos da história mundial e brasileira com uma abordagem crítica e contextualizada. O curso conecta Antiguidade, Idade Média, Modernidade e o século XX por meio de fontes primárias, debates historiográficos e análise de processos econômicos, sociais e culturais. Ideal para quem se prepara para o ENEM, vestibulares de humanas ou simplesmente deseja entender o presente a partir das raízes do passado.',
      duracao: '55 horas',
      aulas: '40 aulas',
      nivel: 'Iniciante',
      topicos: [
        { titulo: 'Antiguidade Clássica e Oriental', descricao: 'Mesopotâmia, Egito, Grécia e Roma — formação do Estado, religião, filosofia e legado para o ocidente.' },
        { titulo: 'Idade Média e Feudalismo', descricao: 'Cristianização da Europa, sistema feudal, Cruzadas, peste negra e a transição para o capitalismo comercial.' },
        { titulo: 'Brasil Colônia, Império e República', descricao: 'Da chegada portuguesa à Proclamação da República, com foco em escravidão, ciclos econômicos e formação do território.' },
        { titulo: 'Era das Revoluções', descricao: 'Revolução Francesa, Industrial e movimentos liberais do século XIX — como nasceu o mundo moderno.' },
        { titulo: 'Século XX: guerras, ditaduras e democracia', descricao: 'Grandes Guerras, Guerra Fria, ditadura militar brasileira e os desafios contemporâneos.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'Para que serve estudar História?', duracao: '36 min', descricao: 'O que é fonte histórica, historiografia e por que a interpretação muda com o tempo.' },
        { num: '02', titulo: 'Grécia: berço da política e da filosofia', duracao: '50 min', descricao: 'Atenas, Esparta, democracia ateniense e as bases do pensamento ocidental.' },
        { num: '03', titulo: 'Roma: do mito de Rômulo à queda do Império', duracao: '54 min', descricao: 'Monarquia, República, Império e os fatores múltiplos que levaram ao colapso romano.' },
        { num: '04', titulo: 'Brasil Colônia: economia açucareira e escravidão', duracao: '1h 02 min', descricao: 'Plantation, tráfico atlântico, resistência negra e a formação social do Brasil.' },
        { num: '05', titulo: 'Revolução Francesa em 3 atos', duracao: '58 min', descricao: 'Causas, fases (girondinos, jacobinos, Termidor) e impactos globais.' },
        { num: '06', titulo: 'Brasil 1964: ditadura militar', duracao: '1h 06 min', descricao: 'Contexto, AI-5, milagre econômico, repressão e o processo de redemocratização.' }
      ],
      reviews: [
        { nome: 'Sofia Mendonça', iniciais: 'SM', nota: 5, data: 'Há 2 semanas', comentario: 'Passei em História na Fuvest. As análises de fontes primárias me deram repertório que diferencial qualquer redação.' },
        { nome: 'Gustavo Reis', iniciais: 'GR', nota: 5, data: 'Há 1 mês', comentario: 'Prof. Roberto contextualiza tudo com o presente. Aulas longas, mas você não vê o tempo passar.' },
        { nome: 'Renata Aguiar', iniciais: 'RA', nota: 4, data: 'Há 2 meses', comentario: 'Excelente abordagem crítica. Achei o módulo de Idade Média um pouco curto, mas o resto compensa.' }
      ]
    },

    'Gestão de Projetos': {
      descricao: 'Aprenda a entregar projetos no prazo, no orçamento e no escopo combinados. O curso une o framework PMBOK aos métodos ágeis modernos (Scrum, Kanban, OKRs), passando por gestão de stakeholders, análise de riscos, cronogramas em ferramentas como MS Project e Jira, e liderança de equipes multidisciplinares. Ideal para quem busca certificações como PMP, CAPM ou PSM e quer assumir posições de liderança em qualquer setor.',
      duracao: '48 horas',
      aulas: '32 aulas',
      nivel: 'Iniciante',
      topicos: [
        { titulo: 'Fundamentos do PMBOK', descricao: 'Os 5 grupos de processos e as 10 áreas de conhecimento explicados com exemplos práticos.' },
        { titulo: 'Métodos Ágeis: Scrum e Kanban', descricao: 'Cerimônias, papéis, artefatos e quando escolher Scrum, Kanban ou um modelo híbrido.' },
        { titulo: 'Gestão de Riscos e Stakeholders', descricao: 'Matriz de probabilidade x impacto, plano de resposta e mapa de poder/interesse de stakeholders.' },
        { titulo: 'Cronogramas e Orçamentos', descricao: 'EAP, caminho crítico, gráfico de Gantt no MS Project e controle de custos com EVM.' },
        { titulo: 'Liderança de equipes', descricao: 'Comunicação assertiva, resolução de conflitos e construção de times de alta performance.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'O que é um projeto (e o que NÃO é)', duracao: '34 min', descricao: 'Diferença entre projeto, programa, portfólio e operação. Quando aplicar gestão de projetos.' },
        { num: '02', titulo: 'Termo de Abertura na prática', duracao: '46 min', descricao: 'Construção de um TAP completo para um projeto real, com escopo, premissas e restrições.' },
        { num: '03', titulo: 'Scrum em uma sprint completa', duracao: '1h 05 min', descricao: 'Planning, daily, review e retrospective simulados em um caso de software.' },
        { num: '04', titulo: 'Análise de riscos passo a passo', duracao: '52 min', descricao: 'Identificação, qualificação, quantificação e plano de resposta com exemplos reais.' },
        { num: '05', titulo: 'Gantt e caminho crítico no MS Project', duracao: '58 min', descricao: 'Construção de um cronograma completo, identificação do CPM e ajustes de prazo.' },
        { num: '06', titulo: 'Encerramento e lições aprendidas', duracao: '40 min', descricao: 'Como fechar um projeto formalmente e capturar conhecimento para os próximos.' }
      ],
      reviews: [
        { nome: 'Bruno Carvalho', iniciais: 'BC', nota: 5, data: 'Há 3 semanas', comentario: 'Tirei o CAPM em 2 meses estudando só por esse curso. Conteúdo alinhado 100% com o exame.' },
        { nome: 'Aline Moraes', iniciais: 'AM', nota: 5, data: 'Há 1 mês', comentario: 'Profa Fernanda traz cases reais que não estão em livro nenhum. Já apliquei na minha squad.' },
        { nome: 'Felipe Duarte', iniciais: 'FD', nota: 4, data: 'Há 2 meses', comentario: 'Muito bom o equilíbrio entre PMBOK e ágil. Faltou um pouco mais sobre SAFe, mas é detalhe.' }
      ]
    },

    'Administração': {
      descricao: 'Tenha uma visão 360° do mundo dos negócios. O curso percorre teoria geral da administração, planejamento estratégico (SWOT, Porter, BSC), finanças corporativas para gestores não financeiros, gestão de pessoas e marketing essencial. Ideal para futuros empreendedores, profissionais que assumem cargos de gestão pela primeira vez ou estudantes que querem dominar os fundamentos antes de uma especialização.',
      duracao: '52 horas',
      aulas: '38 aulas',
      nivel: 'Iniciante',
      topicos: [
        { titulo: 'Teoria Geral da Administração', descricao: 'De Taylor e Fayol às escolas contemporâneas — como cada teoria responde a um contexto histórico.' },
        { titulo: 'Planejamento Estratégico', descricao: 'Análise SWOT, 5 Forças de Porter, BSC e construção de um plano estratégico de 3 anos.' },
        { titulo: 'Finanças para não financeiros', descricao: 'DRE, balanço, fluxo de caixa, indicadores de liquidez e rentabilidade explicados sem jargão.' },
        { titulo: 'Gestão de Pessoas', descricao: 'Recrutamento, avaliação de desempenho, plano de carreira e cultura organizacional.' },
        { titulo: 'Marketing e Vendas essenciais', descricao: '4Ps, posicionamento, funil de vendas e métricas básicas para tomar decisão comercial.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'Por que estudar administração hoje', duracao: '30 min', descricao: 'Visão panorâmica do curso e como cada módulo se conecta com o mercado atual.' },
        { num: '02', titulo: 'Da Revolução Industrial a Henry Ford', duracao: '48 min', descricao: 'Linha do tempo das principais teorias administrativas e o que cada uma deixou de herança.' },
        { num: '03', titulo: 'SWOT e 5 Forças aplicadas', duracao: '54 min', descricao: 'Análise completa de uma empresa real do varejo brasileiro, do diagnóstico à recomendação.' },
        { num: '04', titulo: 'Lendo um balanço sem se perder', duracao: '1h 02 min', descricao: 'Estrutura do BP, principais contas e o que olhar primeiro como gestor.' },
        { num: '05', titulo: 'Recrutamento estruturado', duracao: '46 min', descricao: 'Job description, entrevista por competência e como evitar contratações erradas.' },
        { num: '06', titulo: 'Construindo cultura organizacional', duracao: '52 min', descricao: 'Valores, rituais, símbolos e como cultura come estratégia no café da manhã.' }
      ],
      reviews: [
        { nome: 'Vinícius Toledo', iniciais: 'VT', nota: 5, data: 'Há 2 semanas', comentario: 'Sou engenheiro e fui promovido pra gerente. Esse curso me deu o vocabulário e os frameworks que faltavam.' },
        { nome: 'Mariana Antunes', iniciais: 'MA', nota: 5, data: 'Há 1 mês', comentario: 'Aulas de finanças foram um divisor. Finalmente entendi como ler uma DRE sem decorar.' },
        { nome: 'Rodrigo Castelo', iniciais: 'RC', nota: 4, data: 'Há 3 meses', comentario: 'Ótimo panorama. Para quem já é da área é introdutório, para iniciantes é perfeito.' }
      ]
    },

    'Engenharia de Software': {
      descricao: 'Forme-se um(a) engenheiro(a) de software completo(a). O curso vai além de programar: você aprende a projetar sistemas escaláveis com arquiteturas modernas (hexagonal, microsserviços, event-driven), aplica padrões de projeto, escreve código limpo e testável, monta pipelines de CI/CD com Docker e Kubernetes, observa sistemas em produção (logs, métricas, traces) e domina o trabalho com Git em equipes grandes. Conteúdo voltado para quem quer atuar como pleno ou sênior em empresas de tecnologia exigentes.',
      duracao: '140 horas',
      aulas: '95 aulas',
      nivel: 'Avançado',
      topicos: [
        { titulo: 'Arquitetura de Software moderna', descricao: 'Hexagonal, Clean Architecture, microsserviços, event-driven e quando aplicar cada uma.' },
        { titulo: 'Design Patterns aplicados', descricao: 'GoF, padrões arquiteturais e refatoração de código legado para padrões.' },
        { titulo: 'Testes automatizados em todos os níveis', descricao: 'Unitários, integração, contrato (Pact), e2e e estratégia da pirâmide de testes.' },
        { titulo: 'CI/CD com Docker e Kubernetes', descricao: 'Pipelines no GitHub Actions, containerização, deploys blue/green e canary no Kubernetes.' },
        { titulo: 'Observabilidade e SRE', descricao: 'Logs estruturados, métricas com Prometheus, tracing distribuído e SLOs/SLIs.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'O que é engenharia de software (de verdade)', duracao: '40 min', descricao: 'Diferença entre programar e fazer engenharia. Trade-offs, restrições e contexto.' },
        { num: '02', titulo: 'Clean Architecture na prática', duracao: '1h 18 min', descricao: 'Construção de um caso de uso completo respeitando regras de dependência e camadas.' },
        { num: '03', titulo: 'Padrões GoF que você vai usar de verdade', duracao: '1h 06 min', descricao: 'Strategy, Factory, Observer, Decorator — com refatoração de código real.' },
        { num: '04', titulo: 'Pirâmide de testes e TDD', duracao: '58 min', descricao: 'Quanto investir em cada nível, exemplos práticos e custo/benefício.' },
        { num: '05', titulo: 'Dockerizando uma aplicação real', duracao: '1h 02 min', descricao: 'Multi-stage build, Docker Compose para dev local e otimização de imagens.' },
        { num: '06', titulo: 'Observabilidade: além do log no console', duracao: '1h 14 min', descricao: 'Os 3 pilares (logs, métricas, traces) implementados em uma aplicação Node/Java.' }
      ],
      reviews: [
        { nome: 'Pedro Henrique Vaz', iniciais: 'PV', nota: 5, data: 'Há 2 semanas', comentario: 'Conteúdo de sênior. As aulas de Clean Architecture me ajudaram a passar em entrevista de big tech.' },
        { nome: 'Isadora Lacerda', iniciais: 'IL', nota: 5, data: 'Há 1 mês', comentario: 'Prof. Francisco é cirúrgico. As aulas de observabilidade são raras de achar nesse nível em português.' },
        { nome: 'Murilo Aragão', iniciais: 'MA', nota: 4, data: 'Há 2 meses', comentario: 'Curso pesado. Recomendo só para quem já tem 2+ anos de experiência. Vale cada minuto.' }
      ]
    },

    'Redes de Computadores': {
      descricao: 'Entenda a fundo como a internet funciona. O curso percorre todas as camadas do modelo TCP/IP, do meio físico ao HTTP, com foco em endereçamento IP (v4 e v6), roteamento, switching, segurança de redes (firewalls, VPNs, TLS), redes wireless e introdução a redes em nuvem (AWS VPC). Você vai configurar redes em laboratórios virtuais (Cisco Packet Tracer e GNS3) e sair preparado para certificações como CCNA e Network+.',
      duracao: '70 horas',
      aulas: '48 aulas',
      nivel: 'Intermediário',
      topicos: [
        { titulo: 'Modelo OSI e TCP/IP em profundidade', descricao: 'O que cada camada faz, quais protocolos vivem em cada uma e como elas conversam.' },
        { titulo: 'Endereçamento IPv4, IPv6 e sub-redes', descricao: 'Cálculo de sub-redes (VLSM), CIDR, NAT e a transição para IPv6.' },
        { titulo: 'Roteamento e Switching', descricao: 'OSPF, BGP, VLANs, STP e configuração prática em equipamentos Cisco.' },
        { titulo: 'Segurança de Redes', descricao: 'Firewalls stateful, ACLs, VPNs IPSec, TLS/SSL e principais ataques (DDoS, MITM).' },
        { titulo: 'Redes em Nuvem (AWS VPC)', descricao: 'Construção de uma VPC do zero, sub-redes públicas/privadas, security groups e peering.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'Como dois computadores conversam', duracao: '38 min', descricao: 'Visão de ponta a ponta de uma requisição HTTP, da digitação no navegador até a resposta.' },
        { num: '02', titulo: 'Modelo OSI desmistificado', duracao: '52 min', descricao: 'Cada uma das 7 camadas com exemplos reais e analogias do dia a dia.' },
        { num: '03', titulo: 'Cálculo de sub-redes sem dor', duracao: '1h 04 min', descricao: 'Método visual para calcular VLSM rapidamente, com 20 exercícios resolvidos.' },
        { num: '04', titulo: 'Configurando OSPF no Packet Tracer', duracao: '58 min', descricao: 'Topologia multi-router, áreas, redistribuição e troubleshooting.' },
        { num: '05', titulo: 'Firewall e ACLs Cisco', duracao: '54 min', descricao: 'ACLs standard e extended, ordem de avaliação e armadilhas comuns.' },
        { num: '06', titulo: 'Sua primeira VPC na AWS', duracao: '1h 10 min', descricao: 'Sub-redes, route tables, internet gateway, NAT gateway e teste com EC2.' }
      ],
      reviews: [
        { nome: 'André Vasconcelos', iniciais: 'AV', nota: 5, data: 'Há 3 semanas', comentario: 'Tirei o CCNA depois desse curso. Os labs no Packet Tracer são idênticos ao que cai na prova.' },
        { nome: 'Talita Reinaldo', iniciais: 'TR', nota: 5, data: 'Há 1 mês', comentario: 'Prof. Mario explica sub-redes de um jeito que parece truque de mágica. Finalmente parei de chutar.' },
        { nome: 'Fernando Klein', iniciais: 'FK', nota: 4, data: 'Há 2 meses', comentario: 'Muito completo. A parte de cloud poderia ser mais extensa, mas o que tem é de qualidade.' }
      ]
    },

    'default': {
      descricao: 'Este curso oferece uma abordagem completa e atualizada sobre o tema, combinando fundamentos teóricos sólidos com aplicação prática direta no mercado de trabalho. Cada módulo foi desenhado para construir conhecimento de forma progressiva, com exercícios, projetos e mentoria de especialistas que atuam diariamente na área.',
      duracao: '40 horas',
      aulas: '24 aulas',
      nivel: 'Geral',
      topicos: [
        { titulo: 'Fundamentos Teóricos', descricao: 'Base conceitual sólida para entender os porquês antes de partir para a prática.' },
        { titulo: 'Exercícios Práticos', descricao: 'Atividades aplicadas ao final de cada módulo para fixar o aprendizado de forma ativa.' },
        { titulo: 'Projetos de Portfólio', descricao: 'Você sai do curso com peças concretas para mostrar a futuros empregadores ou clientes.' },
        { titulo: 'Certificado Internacional', descricao: 'Certificado reconhecido emitido ao concluir 100% do conteúdo e aprovado nas avaliações.' },
        { titulo: 'Suporte com Especialistas', descricao: 'Tire dúvidas com mentores que atuam no mercado, em fórum dedicado e mentorias mensais.' }
      ],
      aulasDetalhe: [
        { num: '01', titulo: 'Boas-vindas e visão geral', duracao: '30 min', descricao: 'Apresentação do curso, objetivos de aprendizagem e dicas de aproveitamento.' },
        { num: '02', titulo: 'Conceitos fundamentais', duracao: '45 min', descricao: 'Os pilares teóricos que sustentam todo o restante do conteúdo.' },
        { num: '03', titulo: 'Primeiros exercícios práticos', duracao: '50 min', descricao: 'Aplicação imediata dos conceitos com correção comentada.' },
        { num: '04', titulo: 'Estudo de caso real', duracao: '55 min', descricao: 'Análise de um cenário do mercado, com tomada de decisão guiada.' },
        { num: '05', titulo: 'Projeto guiado', duracao: '1h', descricao: 'Construção de uma entrega completa, do briefing à apresentação final.' },
        { num: '06', titulo: 'Próximos passos e certificação', duracao: '35 min', descricao: 'Como continuar evoluindo, recursos complementares e processo de certificação.' }
      ],
      reviews: [
        { nome: 'Aluno Verificado', iniciais: 'AV', nota: 5, data: 'Há 2 semanas', comentario: 'Conteúdo bem estruturado, didática excelente e suporte dos professores acima da média do mercado.' },
        { nome: 'Aluna Verificada', iniciais: 'AV', nota: 5, data: 'Há 1 mês', comentario: 'Recomendo demais. Saí do curso com confiança para aplicar tudo no meu trabalho.' },
        { nome: 'Aluno Verificado', iniciais: 'AV', nota: 4, data: 'Há 2 meses', comentario: 'Muito bom. Senti falta de mais exercícios em alguns módulos, mas o saldo é extremamente positivo.' }
      ]
    }
  };

  // ============================================================
  // Helpers de UI
  // ============================================================
  function renderEstrelas(nota) {
    let html = '<div class="review-stars" aria-label="Nota ' + nota + ' de 5">';
    for (let i = 1; i <= 5; i++) {
      const cls = i <= nota ? 'star filled' : 'star';
      html += `<svg class="${cls}" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    }
    html += '</div>';
    return html;
  }

  function calcularMedia(reviews) {
    const soma = reviews.reduce((acc, r) => acc + r.nota, 0);
    return (soma / reviews.length).toFixed(1);
  }

  // Delegação de Eventos
  main.addEventListener('click', (e) => {
    const card = e.target.closest('.curso-card');
    if (card && !e.target.closest('.curso-detalhe')) {
      exibirDetalhes(card);
      return;
    }

    if (e.target.closest('.voltar-btn')) {
      voltarAosCursos();
      return;
    }

    // Toggle do dropdown de tópicos
    const trigger = e.target.closest('.topico-trigger');
    if (trigger) {
      const item = trigger.closest('.topico-item');
      const expandido = item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', expandido ? 'true' : 'false');
    }
  });

  function exibirDetalhes(card) {
    const titulo = card.querySelector('h2').textContent.trim();
    const imgEl = card.querySelector('.card-img img');
    const imgSrc = imgEl ? imgEl.src : '';
    const imgAlt = imgEl ? imgEl.alt : titulo;
    const badges = card.querySelectorAll('.badge, .categoria');
    const preco = card.querySelector('.price')?.textContent ?? '';
    const professor = card.querySelector('.professor')?.textContent ?? '';

    const info = dadosCursos[titulo] || dadosCursos['default'];

    let badgesHTML = '';
    badges.forEach(b => {
      badgesHTML += `<span class="${b.className}">${b.textContent}</span> `;
    });

    // Dropdowns de tópicos
    const topicosHTML = info.topicos.map((t, i) => `
      <li class="topico-item">
        <button class="topico-trigger" type="button" aria-expanded="false">
          <span class="topico-num">${String(i + 1).padStart(2, '0')}</span>
          <span class="topico-titulo">${t.titulo}</span>
          <svg class="topico-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="topico-conteudo">
          <p>${t.descricao}</p>
        </div>
      </li>
    `).join('');

    // Conteúdo das aulas
    const aulasHTML = info.aulasDetalhe.map(a => `
      <article class="aula-item">
        <div class="aula-num">${a.num}</div>
        <div class="aula-info">
          <div class="aula-cabecalho">
            <h3>${a.titulo}</h3>
            <span class="aula-duracao">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${a.duracao}
            </span>
          </div>
          <p>${a.descricao}</p>
        </div>
      </article>
    `).join('');

    // Reviews
    const media = calcularMedia(info.reviews);
    const reviewsHTML = info.reviews.map(r => `
      <article class="review-card">
        <header class="review-head">
          <div class="review-avatar" aria-hidden="true">${r.iniciais}</div>
          <div class="review-meta">
            <strong class="review-nome">${r.nome}</strong>
            <span class="review-data">${r.data}</span>
          </div>
          ${renderEstrelas(r.nota)}
        </header>
        <p class="review-texto">${r.comentario}</p>
      </article>
    `).join('');

    main.innerHTML = `
      <section class="curso-detalhe">
        <button class="voltar-btn" type="button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Voltar aos cursos
        </button>

        <div class="detalhe-header">
          <div class="detalhe-visual">
            <img src="${imgSrc}" alt="${imgAlt}" class="detalhe-img">
          </div>

          <div class="detalhe-info">
            <div class="detalhe-badges">${badgesHTML}</div>
            <h1>${titulo}</h1>
            <p class="detalhe-professor">Ministrado por <strong>${professor}</strong></p>

            <div class="detalhe-specs">
              <div class="spec-item">
                <span class="spec-label">Duração</span>
                <span class="spec-value">${info.duracao}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Conteúdo</span>
                <span class="spec-value">${info.aulas}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Nível</span>
                <span class="spec-value">${info.nivel}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Acesso</span>
                <span class="spec-value">Vitalício</span>
              </div>
            </div>

            <p class="detalhe-descricao">${info.descricao}</p>

            <div class="detalhe-preco-container">
              <span class="detalhe-preco">${preco}</span>
              <button class="cta-btn" type="button">Matricular-se agora</button>
            </div>
          </div>
        </div>

        <div class="detalhe-conteudo">

          <div class="curriculo-card">
            <div class="card-cabecalho">
              <h2>O que você vai dominar</h2>
              <p class="card-subtitulo">Clique em cada tópico para ver os detalhes completos do que será abordado.</p>
            </div>
            <ul class="detalhe-topicos">
              ${topicosHTML}
            </ul>
          </div>

          <div class="curriculo-card">
            <div class="card-cabecalho">
              <h2>Conteúdo de cada aula</h2>
              <p class="card-subtitulo">Uma amostra das primeiras ${info.aulasDetalhe.length} aulas. O curso completo conta com ${info.aulas}.</p>
            </div>
            <div class="aulas-lista">
              ${aulasHTML}
            </div>
          </div>

          <div class="curriculo-card">
            <div class="card-cabecalho reviews-cabecalho">
              <div>
                <h2>O que dizem nossos alunos</h2>
                <p class="card-subtitulo">Avaliações verificadas de quem já concluiu o curso.</p>
              </div>
              <div class="reviews-resumo">
                <span class="reviews-nota">${media}</span>
                ${renderEstrelas(Math.round(media))}
                <span class="reviews-total">${info.reviews.length} avaliações</span>
              </div>
            </div>
            <div class="reviews-lista">
              ${reviewsHTML}
            </div>
          </div>

        </div>
      </section>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function voltarAosCursos() {
    main.innerHTML = conteudoOriginal;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
});
