export type Lang = 'pt' | 'en';
export type Estagio = 'semente' | 'brotando' | 'maduro';

export const getLang = (locale: string | undefined): Lang => (locale === 'en' ? 'en' : 'pt');

const pt = {
	meta: {
		title: 'Isabela Class · Engenheira de software',
		description:
			'Software para toda a jornada do cliente: integrações, análises e agentes de IA para operações de receita.',
	},
	nav: {
		label: 'Principal',
		projetos: 'Projetos',
		trajetoria: 'Trajetória',
		contato: 'Contato',
		idioma: 'Idioma',
	},
	hero: {
		hello: 'Oi, eu sou a',
		// trechos em <em> usam a fonte de display em itálico
		lead: 'Construo <em>software para toda a jornada do cliente</em>, do marketing ao pós-venda: integrações, análises e <em>agentes de IA</em>.',
		intro:
			'Engenheira de software trabalhando na área de Sales Ops, em Curitiba. Meu interesse agora é usar ML e estatística para tornar a receita mais previsível.',
		sticker: 'site em construção, de propósito',
	},
	estagios: { semente: 'Semente', brotando: 'Brotando', maduro: 'Maduro' } as Record<Estagio, string>,
	projetos: {
		title: 'Para explorar',
		intro:
			'São projetos interativos: em cada um você mexe em um gráfico ou em um modelo e vê o resultado mudar na hora. A explicação e o código vêm depois, para quem quiser conferir.',
		lista: [
			{
				titulo: 'Esse deal vai fechar?',
				descricao: 'Mude as características de uma oportunidade e veja a previsão responder.',
				tema: 'Pipeline, win/loss e previsão',
				estagio: 'brotando' as Estagio,
			},
			{
				titulo: 'Quem já está pronto para comprar?',
				descricao: 'Explore os perfis de uso do produto e descubra quais viram cliente.',
				tema: 'Uso de produto e comportamento',
				estagio: 'semente' as Estagio,
			},
			{
				titulo: 'Qual lead merece a primeira ligação?',
				descricao: 'Ordene a fila do dia e compare com a escolha do modelo.',
				tema: 'Funil e qualificação de leads',
				estagio: 'semente' as Estagio,
			},
			{
				titulo: 'Onde está a próxima conta?',
				descricao: 'Escolha um segmento e veja os sinais que apontam para ele.',
				tema: 'Mercado, contas-alvo e sinais',
				estagio: 'semente' as Estagio,
			},
		],
		demo: {
			ariaCurva: 'Curva da chance de fechamento conforme os dias sem contato',
			slider: 'Dias desde o último contato',
			dias: 'dias',
			chance: 'Chance de fechar',
			nota: 'Modelo ilustrativo, ainda sem dados reais.',
		},
	},
	trajetoria: {
		title: 'Trajetória',
		etapas: [
			{
				periodo: '2022 – 2023',
				cargo: 'Solvay · Estágio em soluções digitais',
				resumo: 'Automação de processos financeiros',
			},
			{
				periodo: '2023 – 2025',
				cargo: 'FIEP · Desenvolvedora de software',
				resumo: 'ERP, APIs e IA generativa',
			},
			{
				periodo: '2025 – hoje',
				cargo: 'Logcomex · Sales Ops',
				resumo: 'Software e dados para operações de receita',
			},
		],
	},
	formacao: {
		title: 'Formação, cursos e idiomas',
		labels: { formacao: 'Formação', cursos: 'Cursos', idiomas: 'Idiomas' },
		formacao: [
			{
				curso: 'Engenharia de Software',
				local: 'Universidade Positivo · 2022 – 2026',
				detalhe:
					'TCC: Desenvolvimento e avaliação de modelos supervisionados para a detecção precoce de câncer de pâncreas',
			},
			{
				curso: 'Técnico em Automação Industrial',
				local: 'Instituto Federal do Paraná · 2017 – 2020',
				detalhe: undefined as string | undefined,
			},
		],
		cursos: [
			{ nome: 'Knowledge Graphs for RAG', origem: 'DeepLearning.AI · 2026' },
			{ nome: 'Building Agentic RAG with LlamaIndex', origem: 'DeepLearning.AI · 2026' },
			{ nome: 'AI Agents in LangGraph', origem: 'DeepLearning.AI · 2026' },
		],
		idiomas: [
			{ idioma: 'Português', nivel: 'Nativo' },
			{ idioma: 'Inglês', nivel: 'Intermediário' },
			{ idioma: 'Espanhol', nivel: 'Básico' },
		],
	},
	footer: {
		cta: 'Vamos conversar?',
	},
};

const en: typeof pt = {
	meta: {
		title: 'Isabela Class · Software engineer',
		description:
			'Software for the whole customer journey: integrations, analytics and AI agents for revenue operations.',
	},
	nav: {
		label: 'Main',
		projetos: 'Projects',
		trajetoria: 'Experience',
		contato: 'Contact',
		idioma: 'Language',
	},
	hero: {
		hello: "Hi, I'm",
		lead: 'I build <em>software for the whole customer journey</em>, from marketing to post-sale: integrations, analytics and <em>AI agents</em>.',
		intro:
			"Software engineer working in Sales Ops, based in Curitiba, Brazil. Right now I'm interested in using ML and statistics to make revenue more predictable.",
		sticker: 'under construction, on purpose',
	},
	estagios: { semente: 'Seed', brotando: 'Sprouting', maduro: 'Mature' },
	projetos: {
		title: 'To explore',
		intro:
			'These are interactive projects: in each one you play with a chart or a model and watch the result change right away. The explanation and the code come after, for anyone who wants to dig in.',
		lista: [
			{
				titulo: 'Will this deal close?',
				descricao: "Change an opportunity's characteristics and watch the forecast respond.",
				tema: 'Pipeline, win/loss and forecasting',
				estagio: 'brotando',
			},
			{
				titulo: 'Who is ready to buy?',
				descricao: 'Explore product usage profiles and find out which ones become customers.',
				tema: 'Product usage and behavior',
				estagio: 'semente',
			},
			{
				titulo: 'Which lead deserves the first call?',
				descricao: "Rank the day's queue and compare it with the model's pick.",
				tema: 'Funnel and lead qualification',
				estagio: 'semente',
			},
			{
				titulo: 'Where is the next account?',
				descricao: 'Pick a segment and see the signals that point to it.',
				tema: 'Market, target accounts and signals',
				estagio: 'semente',
			},
		],
		demo: {
			ariaCurva: 'Curve of the chance to close by days without contact',
			slider: 'Days since last contact',
			dias: 'days',
			chance: 'Chance to close',
			nota: 'Illustrative model, no real data yet.',
		},
	},
	trajetoria: {
		title: 'Experience',
		etapas: [
			{
				periodo: '2022 – 2023',
				cargo: 'Solvay · Digital solutions intern',
				resumo: 'Financial process automation',
			},
			{
				periodo: '2023 – 2025',
				cargo: 'FIEP · Software developer',
				resumo: 'ERP, APIs and generative AI',
			},
			{
				periodo: '2025 – now',
				cargo: 'Logcomex · Sales Ops',
				resumo: 'Software and data for revenue operations',
			},
		],
	},
	formacao: {
		title: 'Education, courses and languages',
		labels: { formacao: 'Education', cursos: 'Courses', idiomas: 'Languages' },
		formacao: [
			{
				curso: 'Software Engineering',
				local: 'Universidade Positivo · 2022 – 2026',
				detalhe:
					'Thesis: Development and evaluation of supervised models for the early detection of pancreatic cancer',
			},
			{
				curso: 'Industrial Automation Technician',
				local: 'Instituto Federal do Paraná · 2017 – 2020',
				detalhe: undefined,
			},
		],
		cursos: [
			{ nome: 'Knowledge Graphs for RAG', origem: 'DeepLearning.AI · 2026' },
			{ nome: 'Building Agentic RAG with LlamaIndex', origem: 'DeepLearning.AI · 2026' },
			{ nome: 'AI Agents in LangGraph', origem: 'DeepLearning.AI · 2026' },
		],
		idiomas: [
			{ idioma: 'Portuguese', nivel: 'Native' },
			{ idioma: 'English', nivel: 'Intermediate' },
			{ idioma: 'Spanish', nivel: 'Basic' },
		],
	},
	footer: {
		cta: "Let's talk?",
	},
};

export const content: Record<Lang, typeof pt> = { pt, en };

export const useContent = (locale: string | undefined) => content[getLang(locale)];
