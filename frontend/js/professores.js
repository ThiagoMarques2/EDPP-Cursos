/* ── Dados dos professores ── */
const professores = {
    joao: {
        nome: 'João Silva',
        area: '🔬 Ciências',
        iniciais: 'JS',
        grad: 'linear-gradient(135deg,#10b981,#059669)',
        stats: [{ v:'1', r:'Curso' },{ v:'980', r:'Alunos' },{ v:'4.0★', r:'Nota' }],
        bio: 'João Silva é Doutor em Química Orgânica pela UNICAMP e realizou pós-doutorado no Instituto Max Planck, na Alemanha. Com mais de 15 anos de experiência acadêmica e industrial, já publicou 34 artigos científicos e colaborou com empresas do setor farmacêutico.',
        citacao: '"A química está em tudo ao nosso redor. Meu objetivo é fazer você enxergar o mundo com outros olhos."',
        cursos: [
            { emoji:'⚗️', nome:'Química Orgânica do Zero', meta:'12h · 24 aulas · Iniciante' },
            { emoji:'🧪', nome:'Reações e Mecanismos Avançados', meta:'18h · 36 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'@', label:'Lattes', url:'#' },
        ],
    },
    maria: {
        nome: 'Maria Santos',
        area: '💻 Tecnologia',
        iniciais: 'MS',
        grad: 'linear-gradient(135deg,#4a6cf7,#6c63ff)',
        stats: [{ v:'1', r:'Curso' },{ v:'2.140', r:'Alunos' },{ v:'4.9★', r:'Nota' }],
        bio: 'Maria Santos é Engenheira de Software e Mestre em Inteligência Artificial pela USP. Trabalhou no Google Brasil por 4 anos e hoje é professora e consultora independente. Apaixonada por tornar conceitos complexos acessíveis a qualquer pessoa.',
        citacao: '"Código bem escrito é como uma boa história: todo mundo consegue entender e aprender com ele."',
        cursos: [
            { emoji:'☕', nome:'Programação em Java', meta:'20h · 38 aulas · Avançado' },
            { emoji:'🤖', nome:'Introdução à IA com Python', meta:'16h · 30 aulas · Intermediário' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'gh', label:'GitHub', url:'#' },
        ],
    },
    carlos: {
        nome: 'Carlos Oliveira',
        area: '🎨 Arte & Design',
        iniciais: 'CO',
        grad: 'linear-gradient(135deg,#f59e0b,#d97706)',
        stats: [{ v:'1', r:'Curso' },{ v:'1.870', r:'Alunos' },{ v:'4.7★', r:'Nota' }],
        bio: 'Carlos Oliveira é Designer Gráfico com especialização em UX pela PUC-SP. Fundador do estúdio Forma&Cor, já trabalhou com marcas como Natura, Itaú e Embraer. Acredita que o design é a ponte entre tecnologia e emoção.',
        citacao: '"Design não é só sobre como as coisas parecem. É sobre como as coisas funcionam para quem as usa."',
        cursos: [
            { emoji:'🎨', nome:'Design Gráfico do Zero', meta:'15h · 28 aulas · Intermediário' },
            { emoji:'📱', nome:'UX Design na Prática', meta:'14h · 26 aulas · Iniciante' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'be', label:'Behance', url:'#' },
        ],
    },
    ana: {
        nome: 'Ana Costa',
        area: '📣 Marketing',
        iniciais: 'AC',
        grad: 'linear-gradient(135deg,#ec4899,#db2777)',
        stats: [{ v:'1', r:'Curso' },{ v:'3.210', r:'Alunos' },{ v:'4.9★', r:'Nota' }],
        bio: 'Ana Costa é especialista em Marketing Digital com MBA pela FGV. Ex-diretora de marketing da Movile, hoje lidera a agência Pulso Digital e é palestrante em eventos como RD Summit e VTEX Day. Referência em growth e branding no Brasil.',
        citacao: '"Marketing de verdade não interrompe as pessoas. Ele atrai, conecta e cria valor real."',
        cursos: [
            { emoji:'📣', nome:'Marketing Digital Completo', meta:'18h · 32 aulas · Iniciante' },
            { emoji:'📊', nome:'Growth Hacking na Prática', meta:'10h · 20 aulas · Intermediário' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'ig', label:'Instagram', url:'#' },
        ],
    },
    roberto: {
        nome: 'Roberto Mendes',
        area: '🏛️ História',
        iniciais: 'RM',
        grad: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
        stats: [{ v:'1', r:'Curso' },{ v:'1.430', r:'Alunos' },{ v:'4.5★', r:'Nota' }],
        bio: 'Roberto Mendes é Doutor em História Moderna pela PUC-RJ e professor visitante da Universidade de Coimbra. Autor de três livros sobre história política do século XX. Acredita que entender o passado é a melhor forma de navegar o presente.',
        citacao: '"A história não é uma sequência de datas. É a história das pessoas, das ideias e das escolhas que moldaram o mundo."',
        cursos: [
            { emoji:'🏛️', nome:'História Moderna em Perspectiva', meta:'22h · 40 aulas · Iniciante' },
            { emoji:'🌍', nome:'Geopolítica do Século XX', meta:'14h · 26 aulas · Intermediário' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'@', label:'Lattes', url:'#' },
        ],
    },
    fernanda: {
        nome: 'Fernanda Lima',
        area: '💼 Negócios',
        iniciais: 'FL',
        grad: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
        stats: [{ v:'1', r:'Curso' },{ v:'2.050', r:'Alunos' },{ v:'4.6★', r:'Nota' }],
        bio: 'Fernanda Lima é PMP certificada e possui MBA em Gestão de Projetos pelo INSPER. Com 12 anos de experiência em empresas como Ambev e Siemens, liderou projetos de transformação digital em mais de 6 países. Hoje ensina e inspira a próxima geração de líderes.',
        citacao: '"Gerenciar projetos é gerenciar pessoas. Quando você entende isso, tudo muda."',
        cursos: [
            { emoji:'📋', nome:'Gestão de Projetos com PMI', meta:'16h · 30 aulas · Iniciante' },
            { emoji:'⚡', nome:'Metodologias Ágeis na Prática', meta:'12h · 22 aulas · Intermediário' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'yt', label:'YouTube', url:'#' },
        ],
    },
    lucas: {
        nome: 'Lucas Ferreira',
        area: '💻 Tecnologia',
        iniciais: 'LF',
        grad: 'linear-gradient(135deg,#06b6d4,#0891b2)',
        stats: [{ v:'2', r:'Cursos' },{ v:'3.400', r:'Alunos' },{ v:'4.8★', r:'Nota' }],
        bio: 'Lucas Ferreira é desenvolvedor Full Stack com 10 anos de experiência em React e Node.js. Trabalhou em startups do Vale do Silício e hoje é tech lead em uma das maiores fintechs do Brasil. Apaixonado por ensinar código limpo e boas práticas.',
        citacao: '"O melhor código é aquele que qualquer pessoa consegue ler e entender na primeira vez."',
        cursos: [
            { emoji:'⚛️', nome:'React do Zero ao Avançado', meta:'24h · 48 aulas · Intermediário' },
            { emoji:'🛠️', nome:'Node.js e APIs REST', meta:'18h · 34 aulas · Intermediário' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'gh', label:'GitHub', url:'#' },
        ],
    },
    beatriz: {
        nome: 'Beatriz Nunes',
        area: '🎨 Arte & Design',
        iniciais: 'BN',
        grad: 'linear-gradient(135deg,#f43f5e,#e11d48)',
        stats: [{ v:'2', r:'Cursos' },{ v:'2.200', r:'Alunos' },{ v:'4.8★', r:'Nota' }],
        bio: 'Beatriz Nunes é ilustradora e Motion Designer formada pela ESPM com passagem pela Pixar. Seus trabalhos já foram exibidos em festivais internacionais de animação. Acredita que qualquer pessoa pode aprender a criar arte digital com a orientação certa.',
        citacao: '"Animação é a arte de dar vida ao que não existe. E isso começa com uma ideia simples."',
        cursos: [
            { emoji:'🎥', nome:'Motion Design do Zero', meta:'16h · 30 aulas · Iniciante' },
            { emoji:'✏️', nome:'Ilustração Digital Profissional', meta:'14h · 26 aulas · Intermediário' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'be', label:'Behance', url:'#' },
        ],
    },
    rafael: {
        nome: 'Rafael Torres',
        area: '💼 Negócios',
        iniciais: 'RT',
        grad: 'linear-gradient(135deg,#84cc16,#65a30d)',
        stats: [{ v:'2', r:'Cursos' },{ v:'1.750', r:'Alunos' },{ v:'4.7★', r:'Nota' }],
        bio: 'Rafael Torres é empreendedor serial que fundou 3 startups e é mentor de aceleradoras como Y Combinator e Endeavor. Especialista em valuation e captação de investimentos, já ajudou mais de 50 empresas a crescerem.',
        citacao: '"Empreender é resolver problemas reais de pessoas reais. Todo o resto é consequência."',
        cursos: [
            { emoji:'🚀', nome:'Do Zero ao Primeiro Milhão', meta:'20h · 38 aulas · Iniciante' },
            { emoji:'💰', nome:'Valuation e Captação de Investimentos', meta:'12h · 22 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'ig', label:'Instagram', url:'#' },
        ],
    },
    camila: {
        nome: 'Camila Rocha',
        area: '🔬 Ciências',
        iniciais: 'CR',
        grad: 'linear-gradient(135deg,#f97316,#ea580c)',
        stats: [{ v:'1', r:'Curso' },{ v:'1.100', r:'Alunos' },{ v:'4.6★', r:'Nota' }],
        bio: 'Camila Rocha é Bióloga e Doutora em Genômica pela USP, pesquisadora sênior do Instituto Butantan. Participou do desenvolvimento de vacinas e publicou mais de 20 artigos em revistas internacionais. Apaixonada por tornar a ciência acessível a todos.',
        citacao: '"A ciência não é um privilégio de poucos. É uma ferramenta para todos."',
        cursos: [
            { emoji:'🧬', nome:'Genômica e Biotecnologia', meta:'20h · 36 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'@', label:'Lattes', url:'#' },
        ],
    },
    diego: {
        nome: 'Diego Alves',
        area: '💻 Tecnologia',
        iniciais: 'DA',
        grad: 'linear-gradient(135deg,#6366f1,#4f46e5)',
        stats: [{ v:'2', r:'Cursos' },{ v:'2.800', r:'Alunos' },{ v:'4.9★', r:'Nota' }],
        bio: 'Diego Alves é Engenheiro de Dados e especialista em arquiteturas cloud-native, certificado AWS Solutions Architect. Trabalha na AWS Brasil liderando projetos de big data para empresas Fortune 500. Referência nacional em engenharia de dados.',
        citacao: '"Dados sem contexto são apenas números. O valor está em transformar dados em decisões."',
        cursos: [
            { emoji:'☁️', nome:'AWS para Desenvolvedores', meta:'22h · 40 aulas · Intermediário' },
            { emoji:'📊', nome:'Engenharia de Dados na Prática', meta:'18h · 32 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'gh', label:'GitHub', url:'#' },
        ],
    },
    priya: {
        nome: 'Priya Sharma',
        area: '💻 Tecnologia',
        iniciais: 'PS',
        grad: 'linear-gradient(135deg,#a855f7,#9333ea)',
        stats: [{ v:'2', r:'Cursos' },{ v:'1.920', r:'Alunos' },{ v:'4.8★', r:'Nota' }],
        bio: 'Priya Sharma é especialista em Cibersegurança com certificação CISSP e mais de 12 anos de experiência em grandes instituições financeiras. Liderou equipes de segurança no Itaú e no Bradesco, e hoje é consultora independente e professora.',
        citacao: '"Segurança não é um produto, é um processo. E começa com educação."',
        cursos: [
            { emoji:'🔒', nome:'Cibersegurança para Devs', meta:'18h · 34 aulas · Intermediário' },
            { emoji:'🛡️', nome:'Ethical Hacking na Prática', meta:'20h · 38 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'gh', label:'GitHub', url:'#' },
        ],
    },
    marcos: {
        nome: 'Marcos Vinicius',
        area: '💼 Negócios',
        iniciais: 'MV',
        grad: 'linear-gradient(135deg,#14b8a6,#0d9488)',
        stats: [{ v:'2', r:'Cursos' },{ v:'2.300', r:'Alunos' },{ v:'4.7★', r:'Nota' }],
        bio: 'Marcos Vinicius é consultor financeiro CFA certificado com 15 anos de experiência em bancos de investimento como Goldman Sachs e BTG Pactual. Especialista em mercado de capitais, derivativos e gestão de portfólio.',
        citacao: '"Finanças não são sobre dinheiro. São sobre decisões inteligentes no tempo certo."',
        cursos: [
            { emoji:'📈', nome:'Mercado de Capitais do Zero', meta:'20h · 36 aulas · Iniciante' },
            { emoji:'💹', nome:'Análise de Investimentos', meta:'16h · 28 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'yt', label:'YouTube', url:'#' },
        ],
    },
    juliana: {
        nome: 'Juliana Freitas',
        area: '🎨 Arte & Design',
        iniciais: 'JF',
        grad: 'linear-gradient(135deg,#f59e0b,#b45309)',
        stats: [{ v:'2', r:'Cursos' },{ v:'1.650', r:'Alunos' },{ v:'4.9★', r:'Nota' }],
        bio: 'Juliana Freitas é fotógrafa profissional premiada com trabalhos publicados na Vogue Brasil e Elle. Especialista em fotografia editorial e de moda, já fotografou campanhas para marcas como Farm, Arezzo e O Boticario.',
        citacao: '"Uma boa foto não captura um momento. Ela conta uma história inteira em um único frame."',
        cursos: [
            { emoji:'📸', nome:'Fotografia Editorial Profissional', meta:'14h · 26 aulas · Intermediário' },
            { emoji:'🎦', nome:'Iluminação para Estudio', meta:'10h · 18 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'ig', label:'Instagram', url:'#' },
        ],
    },
    eduardo: {
        nome: 'Eduardo Pires',
        area: '🔬 Ciências',
        iniciais: 'EP',
        grad: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
        stats: [{ v:'1', r:'Curso' },{ v:'870', r:'Alunos' },{ v:'4.8★', r:'Nota' }],
        bio: 'Eduardo Pires é Físico e Doutor pelo MIT, pesquisador em mecânica quântica e computação quântica. Publicou mais de 40 artigos em revistas como Nature e Science. Acredita que a física é a linguagem mais profunda do universo.',
        citacao: '"A mecânica quântica não é estranha. É apenas diferente de tudo que você já aprendeu."',
        cursos: [
            { emoji:'⚛️', nome:'Física Quântica Descomplicada', meta:'24h · 44 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'@', label:'Lattes', url:'#' },
        ],
    },
    tatiane: {
        nome: 'Tatiane Moura',
        area: '💼 Negócios',
        iniciais: 'TM',
        grad: 'linear-gradient(135deg,#ec4899,#9333ea)',
        stats: [{ v:'2', r:'Cursos' },{ v:'2.100', r:'Alunos' },{ v:'4.6★', r:'Nota' }],
        bio: 'Tatiane Moura é especialista em RH e cultura organizacional, ex-CHRO da Magazine Luiza. Liderou a transformação cultural de uma empresa com mais de 30 mil funcionários. Palestrante no SXSW e no CBTD.',
        citacao: '"Cultura não é o que você escreve na parede. É o que acontece quando ninguém está olhando."',
        cursos: [
            { emoji:'🧑‍🤝‍🧑', nome:'Liderança e Cultura Organizacional', meta:'16h · 28 aulas · Intermediário' },
            { emoji:'💬', nome:'Comunicação Não-Violenta no Trabalho', meta:'10h · 18 aulas · Iniciante' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'ig', label:'Instagram', url:'#' },
        ],
    },
    bruno: {
        nome: 'Bruno Castro',
        area: '💻 Tecnologia',
        iniciais: 'BC',
        grad: 'linear-gradient(135deg,#10b981,#4a6cf7)',
        stats: [{ v:'2', r:'Cursos' },{ v:'3.100', r:'Alunos' },{ v:'4.9★', r:'Nota' }],
        bio: 'Bruno Castro é especialista em DevOps e CI/CD, ex-engenheiro sênior do Nubank e iFood. Responsável por pipelines que processam milhões de transações por dia. Apaixonado por automação e cultura DevOps.',
        citacao: '"DevOps não é uma ferramenta. É uma mentalidade de colaboração e melhoria contínua."',
        cursos: [
            { emoji:'🔄', nome:'DevOps na Prática', meta:'20h · 36 aulas · Intermediário' },
            { emoji:'🐳', nome:'Docker e Kubernetes', meta:'18h · 32 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'gh', label:'GitHub', url:'#' },
        ],
    },
    larissa: {
        nome: 'Larissa Campos',
        area: '🎨 Arte & Design',
        iniciais: 'LC',
        grad: 'linear-gradient(135deg,#f43f5e,#f59e0b)',
        stats: [{ v:'1', r:'Curso' },{ v:'1.400', r:'Alunos' },{ v:'4.7★', r:'Nota' }],
        bio: 'Larissa Campos é diretora de arte com 12 anos de experiência em agências como DDB e Ogilvy Brasil. Criou campanhas premiadas no Cannes Lions e no Clío Awards. Especialista em branding e identidade visual.',
        citacao: '"Uma marca forte não é criada em um dia. É construída com consistência e propósito."',
        cursos: [
            { emoji:'🏷️', nome:'Branding e Identidade Visual', meta:'16h · 28 aulas · Intermediário' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'be', label:'Behance', url:'#' },
        ],
    },
    henrique: {
        nome: 'Henrique Souza',
        area: '🔬 Ciências',
        iniciais: 'HS',
        grad: 'linear-gradient(135deg,#06b6d4,#10b981)',
        stats: [{ v:'2', r:'Cursos' },{ v:'1.580', r:'Alunos' },{ v:'4.8★', r:'Nota' }],
        bio: 'Henrique Souza é Matemático e Doutor pelo IMPA, especialista em estatística aplicada e ciência de dados. Consultor de grandes empresas como Petrobras e Vale, e professor visitante da FGV.',
        citacao: '"Matemática não é difícil. É apenas mal ensinada. Meu trabalho é mudar isso."',
        cursos: [
            { emoji:'📊', nome:'Estatística para Ciência de Dados', meta:'22h · 40 aulas · Intermediário' },
            { emoji:'🧠', nome:'Machine Learning com Python', meta:'24h · 44 aulas · Avançado' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'gh', label:'GitHub', url:'#' },
        ],
    },
    vanessa: {
        nome: 'Vanessa Lima',
        area: '💼 Negócios',
        iniciais: 'VL',
        grad: 'linear-gradient(135deg,#f97316,#ec4899)',
        stats: [{ v:'1', r:'Curso' },{ v:'1.900', r:'Alunos' },{ v:'4.7★', r:'Nota' }],
        bio: 'Vanessa Lima é especialista em vendas B2B e negociação estratégica, ex-diretora comercial da Totvs. Responsável por times que geraram mais de R$500M em receita. Autora do livro "Vender com Propósito".',
        citacao: '"Vender é servir. Quando você entende o problema do cliente melhor do que ele, a venda acontece naturalmente."',
        cursos: [
            { emoji:'🤝', nome:'Vendas B2B de Alta Performance', meta:'18h · 32 aulas · Intermediário' },
        ],
        redes: [
            { icone:'in', label:'LinkedIn', url:'#' },
            { icone:'yt', label:'YouTube', url:'#' },
        ],
    },
};


/* ── Paginação + Filtros ── */
const POR_PAGINA = 6;
let paginaAtual = 1;
let filtroAtual = 'todos';

function getTodosItens() {
    return Array.from(document.querySelectorAll('.professores-grid > li'));
}

function getItensFiltrados() {
    return getTodosItens().filter(li =>
        filtroAtual === 'todos' || li.dataset.categoria === filtroAtual
    );
}

function renderPagina() {
    const itens = getItensFiltrados();
    const totalPaginas = Math.ceil(itens.length / POR_PAGINA);
    const inicio = (paginaAtual - 1) * POR_PAGINA;
    const fim = inicio + POR_PAGINA;

    getTodosItens().forEach(li => { li.classList.remove('visivel'); });
    itens.forEach((li, i) => {
        if (i >= inicio && i < fim) li.classList.add('visivel');
    });

    const numeros = document.querySelector('.pag-numeros');
    numeros.innerHTML = '';
    for (let i = 1; i <= totalPaginas; i++) {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'pag-num' + (i === paginaAtual ? ' ativo' : '');
        btn.textContent = i;
        btn.addEventListener('click', () => { paginaAtual = i; renderPagina(); });
        li.appendChild(btn);
        numeros.appendChild(li);
    }

    document.querySelector('.pag-anterior').disabled = paginaAtual === 1;
    document.querySelector('.pag-proximo').disabled  = paginaAtual === totalPaginas || totalPaginas === 0;
    document.querySelector('.paginacao').style.display = totalPaginas <= 1 ? 'none' : '';
}

document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        filtroAtual = btn.textContent.trim().toLowerCase();
        paginaAtual = 1;
        renderPagina();
    });
});

document.querySelector('.pag-anterior').addEventListener('click', () => {
    if (paginaAtual > 1) { paginaAtual--; renderPagina(); }
});
document.querySelector('.pag-proximo').addEventListener('click', () => {
    const total = Math.ceil(getItensFiltrados().length / POR_PAGINA);
    if (paginaAtual < total) { paginaAtual++; renderPagina(); }
});

renderPagina();


/* ── Drawer ── */
const drawer       = document.getElementById('drawer');
const overlay      = document.getElementById('drawerOverlay');
const drawerFechar = document.getElementById('drawerFechar');
const drawerTopo   = document.getElementById('drawerTopo');
const drawerAvatar = document.getElementById('drawerAvatar');
const drawerNome   = document.getElementById('drawerNome');
const drawerArea   = document.getElementById('drawerArea');
const drawerCorpo  = document.getElementById('drawerCorpo');


function abrirDrawer(id) {
    const p = professores[id];
    if (!p) return;

    drawerTopo.style.background   = p.grad;
    drawerAvatar.textContent      = p.iniciais;
    drawerAvatar.style.background = p.grad;
    drawerNome.textContent        = p.nome;
    drawerArea.textContent        = p.area;

    drawerCorpo.innerHTML = `
        <section>
            <p class="drawer-secao-titulo">Sobre</p>
            <p class="drawer-bio">${p.bio}</p>
        </section>
        <blockquote class="drawer-citacao">${p.citacao}</blockquote>
        <section>
            <p class="drawer-secao-titulo">Estatísticas</p>
            <ul class="drawer-stats">
                ${p.stats.map(s => `
                    <li class="drawer-stat">
                        <strong>${s.v}</strong>
                        <span>${s.r}</span>
                    </li>`).join('')}
            </ul>
        </section>
        <section>
            <p class="drawer-secao-titulo">Cursos</p>
            <ul class="drawer-cursos">
                ${p.cursos.map(c => `
                    <li class="drawer-curso">
                        <span class="drawer-curso-icone" style="background:${p.grad.replace('135deg','180deg')};opacity:0.15;font-size:1.3rem">${c.emoji}</span>
                        <div class="drawer-curso-info">
                            <p class="drawer-curso-nome">${c.nome}</p>
                            <p class="drawer-curso-meta">${c.meta}</p>
                        </div>
                    </li>`).join('')}
            </ul>
        </section>
        <section>
            <p class="drawer-secao-titulo">Encontre online</p>
            <menu class="drawer-redes">
                ${p.redes.map(r => `
                    <li><a href="${r.url}" class="drawer-rede" target="_blank">
                        <span>${r.icone}</span> ${r.label}
                    </a></li>`).join('')}
            </menu>
        </section>`;

    drawer.classList.add('ativo');
    overlay.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}


function fecharDrawer() {
    drawer.classList.remove('ativo');
    overlay.classList.remove('ativo');
    document.body.style.overflow = '';
}


document.querySelectorAll('.professor-card').forEach(card => {
    card.addEventListener('click', () => abrirDrawer(card.dataset.prof));
});

drawerFechar.addEventListener('click', fecharDrawer);
overlay.addEventListener('click', fecharDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharDrawer(); });
