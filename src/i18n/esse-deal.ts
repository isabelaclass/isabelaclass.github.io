// Textos da página do estudo "Quando esse deal vai fechar?".
// Números vêm da análise em github.com/isabelaclass/when-will-this-deal-close.
import { getLang } from './content';

export const SLUG = 'projetos/quando-esse-deal-vai-fechar';
export const REPO = 'https://github.com/isabelaclass/when-will-this-deal-close';
export const COLAB =
	'https://colab.research.google.com/github/isabelaclass/when-will-this-deal-close/blob/main/notebooks/quando-esse-deal-vai-fechar.ipynb';

const pt = {
	meta: {
		title: 'Quando esse deal vai fechar? · Isabela Class',
		description:
			'Estudo de caso: prever quando um negócio fecha e transformar isso em previsão de receita mensal, testada contra o que de fato aconteceu.',
	},
	voltar: 'Para explorar',
	projeto: 'Projeto 01',
	andamento: 'Estudo em andamento',
	titulo: 'Quando esse deal vai fechar?',
	lead: 'Errar o <em>quando</em> de um negócio não faz a receita sumir: empurra ela para o mês ou o trimestre seguinte. É isso que estoura uma meta. Este estudo parte dessa pergunta e chega a uma <em>previsão de receita mensal</em>, testada contra o que de fato aconteceu.',
	definicao:
		'Aqui, <strong>fechar é ganhar</strong>: o negócio vira receita. Quando ele sai do funil, ganho ou perdido, digo que foi <strong>encerrado</strong>.',
	fatos: ['8.800 negócios', 'Base pública e sintética (Maven CRM)', 'Python · modelo de risco em tempo discreto'],
	codigo: 'Ver o código no GitHub',
	colab: 'Abrir no Colab',
	resumo: {
		titulo: 'Em resumo',
		itens: [
			'O tempo até o ganho tem <strong>dois grupos</strong>: 42% dos ganhos saem em até 20 dias e 54% levam de 45 a 138. A média não descreve quase ninguém.',
			'De cada 100 negócios que entram em negociação, cerca de <strong>51 são ganhos, 32 perdidos e 16 ficam parados para sempre</strong>. Depois de 138 dias aberto, nenhum foi ganho.',
			'O que decide o <em>quando</em> é a <strong>idade do negócio e o mês do trimestre</strong>. Produto, vendedor, regional e porte da conta não melhoraram a previsão.',
			'Em sete testes, a previsão mensal errou em média <strong>13%</strong>. A conta tradicional, pipeline × taxa de ganho, previu três vezes o real.',
			'Um alarme simples achou uma regional que <strong>triplicou o pipeline</strong> em três semanas com negócios que ficaram parados.',
		],
	},
	hipoteses: {
		titulo: 'Comecei com três hipóteses',
		intro: 'Antes de olhar os dados, anotei o que eu esperava encontrar, pela experiência em Sales Ops. Registrar isso antes é o que permite dizer, depois, o que os dados confirmaram e o que derrubaram.',
		lista: [
			{
				hipotese: 'Negócio que anda rápido no funil converte mais.',
				veredito: 'Não se confirmou',
				tipo: 'nao',
				texto: 'Entre os negócios encerrados, quem sai do funil em até 20 dias é ganho 57% das vezes; quem demora mais, 68%. Andar rápido é, mais vezes, perder rápido. No extremo a ideia vale: depois de 138 dias, nenhum negócio foi ganho.',
			},
			{
				hipotese: 'Ticket alto alavanca mais a receita do que muitos negócios pequenos.',
				veredito: 'Vale para produto, não para porte',
				tipo: 'parcial',
				texto: 'Os três produtos acima de 3.000 são 44% dos negócios e 84% da receita, com a mesma taxa de ganho e o mesmo tempo dos baratos. Já contas grandes rendem mais porque abrem mais negócios: o ticket quase não muda, e o tempo é o mesmo em todos os portes.',
			},
			{
				hipotese: 'Como é difícil mexer na conversão, volume alavanca a receita.',
				veredito: 'Os dados sustentam',
				tipo: 'sim',
				texto: 'A conversão varia pouco entre vendedores (55% a 70%) e o volume varia muito (de 79 a 553 negócios). Cerca de 60% da diferença de receita entre eles vem do volume, 40% do ticket e quase nada da conversão. É uma comparação entre vendedores, não uma prova de causa.',
			},
		],
	},
	media: {
		titulo: 'A média mente',
		texto: [
			'O jeito óbvio de medir quanto tempo um negócio leva para ser ganho é tirar a média dos ganhos. Ela dá 52 dias, mas quase nenhum ganho acontece perto disso.',
			'Existem dois grupos: 42% dos ganhos saem em até 20 dias e 54% levam de 45 a 138. Entre um e outro, só 4%. Uma previsão que usa a média erra os dois.',
		],
		eixo: 'dias entre a entrada em negociação e o ganho',
		legenda: 'negócios ganhos',
		mediaLabel: 'média: 52 dias',
		aria: 'Histograma dos dias até o ganho, com dois picos: um até 20 dias e outro entre 60 e 105 dias',
	},
	destinos: {
		titulo: 'Três destinos, contando os abertos',
		texto: [
			'Olhar só os ganhos esquece os negócios perdidos e os que continuam abertos, e muitos deles nunca vão sair do lugar. É como medir o tempo de fila olhando só quem foi atendido.',
			'Contando todos, a pergunta muda de "quanto tempo leva" para "o que acontece com cada 100 negócios que entram".',
		],
		barra: { ganhos: 'ganhos', perdidos: 'perdidos', nunca: 'parados para sempre' },
		curvaTitulo: 'Negócios já ganhos, por dias desde a entrada',
		serieTodos: 'de todos que entraram',
		serieFechados: 'só entre os ganhos',
		eixoX: 'dias desde a entrada em negociação',
		aria: 'Curva de negócios ganhos ao longo dos dias: contando todos que entraram ela para perto de 51%; só entre os ganhos chega a 100%',
		cuidado:
			'A base só registra encerramentos entre março e dezembro de 2017. Para a curva não sair torta, usei só os negócios que entraram entre 01/03 e 15/08/2017, que têm os 138 dias completos de observação, e deixei de fora o bloco atípico que aparece mais abaixo.',
	},
	sim: {
		titulo: 'Explore: um negócio aberto há X dias',
		intro: 'A pergunta que mais ajuda quem gerencia um funil. Escolha há quantos dias o negócio está em negociação e em que mês do trimestre ele entrou.',
		dias: 'Aberto há',
		diasUn: 'dias',
		mes: 'Entrou no',
		meses: ['1º mês do trimestre', '2º mês', '3º mês'],
		g30: 'É ganho nos próximos 30 dias',
		gAlgum: 'É ganho algum dia',
		parado: 'Fica parado para sempre',
		curva: 'Chance de ser ganho nos próximos 30 dias, por idade',
		aria: 'Curva da chance de ser ganho nos próximos 30 dias conforme a idade do negócio',
		base: (n: string) => `Calculado a partir de ${n} negócios do histórico que estavam abertos com essa idade.`,
		morto: 'Depois de 138 dias, nenhum negócio do histórico foi ganho nem perdido.',
	},
	receita: {
		titulo: 'Da chance à receita',
		texto: [
			'Um negócio de 4.000 com 30% de chance de ser ganho em novembro entra na previsão de novembro como 1.200. Somando isso para todos os negócios abertos, e para os que ainda vão entrar no mês, sai a receita esperada.',
			'A chance vem do histórico: entre os negócios que estavam abertos com a mesma idade, no mesmo mês do trimestre, que fração foi ganha a cada dia. Testei que características mereciam entrar. Só a idade e o calendário melhoraram a previsão; produto, vendedor, gerente, regional e porte não.',
		],
		testeTitulo: 'O teste honesto',
		testeTexto:
			'Voltei a 30/09/2017 e pedi a cada modelo, só com o que se sabia naquele dia, a receita que os negócios abertos trariam no trimestre seguinte. Depois comparei com o que aconteceu.',
		barras: {
			real: 'O que aconteceu',
			m0: 'Pipeline × taxa de ganho',
			m1: 'Só a idade do negócio',
			m2: 'Idade + calendário',
			m3: 'Idade + calendário + alarme',
		},
		aria: 'Barras comparando a receita prevista por cada modelo com a receita real do quarto trimestre de 2017',
		notas: [
			'<strong>57% da receita</strong> do trimestre veio de negócios que nem existiam em 30/09. A previsão completa soma essa parte, projetada pelo ritmo de entrada dos 90 dias anteriores (erro de 2%).',
			'Em sete datas de corte, prevendo o mês seguinte, o erro médio foi de <strong>35%</strong> só com a idade, <strong>18%</strong> com idade e calendário e <strong>13%</strong> com o alarme.',
		],
	},
	alarme: {
		titulo: 'O alarme de pipeline inflado',
		texto: [
			'O maior erro que sobrou vinha de um bloco de negócios que ficaram parados. Não era a empresa toda: era a regional Central, que costuma abrir cerca de 62 negócios por semana e abriu 540 em três semanas. Desses, 355 nunca foram ganhos nem perdidos.',
			'A regra marca uma semana quando duas coisas acontecem juntas, usando só o que se sabe na data da previsão: as entradas da regional chegam a 1,5 vez o seu normal, e a fração encerrada em até 20 dias fica bem abaixo da das outras regionais na mesma semana. O excesso estimado sai da previsão.',
			'Sem a primeira condição, a regional West era marcada cinco vezes sem ter pico nenhum. Com as duas, só as três semanas da Central aparecem.',
		],
		eixo: 'negócios abertos por semana',
		aria: 'Linhas semanais de entradas por regional; a Central salta para mais de 200 por semana no fim de julho de 2017',
		regionais: { Central: 'Central', East: 'East', West: 'West' },
		destaque: 'semanas marcadas',
	},
	falhou: {
		titulo: 'O que não funcionou',
		itens: [
			'<strong>Regressão logística de ganho contra perda.</strong> Treinada com os encerrados, separou ganho de perda tanto quanto cara ou coroa (AUC de 0,49 a 0,53). Nesta base, ganhar ou perder depende em grande parte de quando o negócio é encerrado.',
			'<strong>Mais variáveis num modelo de árvores.</strong> Com produto, vendedor, gerente e regional, ele melhorou num teste e piorou no outro: decorou ruído.',
			'<strong>O campo de conta vazia.</strong> Todo negócio sem conta está aberto, então ele entrega o resultado final. Usá-lo no teste seria usar o futuro, e ficou de fora.',
		],
	},
	limites: {
		titulo: 'Limites e próximos passos',
		itens: [
			'A base é sintética. O método vale; os números são desta empresa fictícia.',
			'A base não tem histórico de atividades. Com ele, "dias desde o último contato" provavelmente seria a variável mais forte.',
			'Sete testes é pouco para afirmar a precisão com segurança.',
		],
		proximos: 'Próximos passos: entregar a previsão como faixa, com a confiança de que o real cai dentro dela, e explicar em linguagem natural por que cada negócio está em risco.',
	},
	fim: { codigo: 'O notebook completo, com o código e as saídas, está no GitHub.', voltar: 'Voltar para Para explorar' },
};

const en: typeof pt = {
	meta: {
		title: 'When will this deal close? · Isabela Class',
		description:
			'Case study: predicting when a deal closes and turning it into a monthly revenue forecast, tested against what actually happened.',
	},
	voltar: 'To explore',
	projeto: 'Project 01',
	andamento: 'Work in progress',
	titulo: 'When will this deal close?',
	lead: 'Getting the <em>when</em> of a deal wrong does not make the revenue disappear: it pushes it into the next month or quarter. That is what breaks a target. This study starts from that question and ends with a <em>monthly revenue forecast</em>, tested against what actually happened.',
	definicao:
		'Here, <strong>closing means winning</strong>: the deal becomes revenue. When it leaves the pipeline, won or lost, I say it was <strong>resolved</strong>.',
	fatos: ['8,800 deals', 'Public synthetic dataset (Maven CRM)', 'Python · discrete-time hazard model'],
	codigo: 'See the code on GitHub',
	colab: 'Open in Colab',
	resumo: {
		titulo: 'In short',
		itens: [
			'Time to win has <strong>two groups</strong>: 42% of wins come within 20 days and 54% take 45 to 138. The average describes almost nobody.',
			'Out of every 100 deals that enter negotiation, about <strong>51 are won, 32 lost and 16 stay stuck forever</strong>. After 138 days open, none was won.',
			'What decides the <em>when</em> is <strong>deal age and month of the quarter</strong>. Product, sales rep, region and account size did not improve the forecast.',
			'Across seven tests, the monthly forecast missed by <strong>13%</strong> on average. The classic pipeline × win rate forecast predicted three times the actual.',
			'A simple alarm found a region that <strong>tripled its pipeline</strong> in three weeks with deals that got stuck.',
		],
	},
	hipoteses: {
		titulo: 'I started with three hypotheses',
		intro: 'Before looking at the data, I wrote down what I expected, from my experience in Sales Ops. Writing it down first is what lets me say, later, what the data confirmed and what it overturned.',
		lista: [
			{
				hipotese: 'Deals that move fast through the pipeline convert more.',
				veredito: 'Not confirmed',
				tipo: 'nao',
				texto: 'Among resolved deals, those that leave the pipeline within 20 days are won 57% of the time; slower ones, 68%. Moving fast more often means losing fast. At the extreme the idea holds: after 138 days, no deal was won.',
			},
			{
				hipotese: 'High tickets drive more revenue than many small deals.',
				veredito: 'True for product, not for size',
				tipo: 'parcial',
				texto: 'The three products priced above 3,000 are 44% of deals and 84% of revenue, with the same win rate and timing as the cheap ones. Large accounts bring more because they open more deals: the ticket barely changes, and timing is the same at every size.',
			},
			{
				hipotese: 'Since conversion is hard to move, volume drives revenue.',
				veredito: 'The data supports it',
				tipo: 'sim',
				texto: 'Conversion varies little across reps (55% to 70%) while volume varies a lot (79 to 553 deals). About 60% of the revenue gap between them comes from volume, 40% from ticket and almost none from conversion. It compares reps; it does not prove cause.',
			},
		],
	},
	media: {
		titulo: 'The average lies',
		texto: [
			'The obvious way to measure how long a deal takes to be won is to average the wins. That gives 52 days, but almost no win happens anywhere near that.',
			'There are two groups: 42% of wins come within 20 days and 54% take 45 to 138. In between, only 4%. A forecast built on the average gets both wrong.',
		],
		eixo: 'days between entering negotiation and the win',
		legenda: 'won deals',
		mediaLabel: 'average: 52 days',
		aria: 'Histogram of days to win with two peaks: one up to 20 days and another between 60 and 105 days',
	},
	destinos: {
		titulo: 'Three outcomes, counting open deals',
		texto: [
			'Looking only at wins forgets the lost deals and the ones still open, and many of those will never move. It is like measuring wait time by looking only at people who were served.',
			'Counting everyone, the question changes from "how long does it take" to "what happens to every 100 deals that come in".',
		],
		barra: { ganhos: 'won', perdidos: 'lost', nunca: 'stuck forever' },
		curvaTitulo: 'Deals already won, by days since entry',
		serieTodos: 'of every deal that came in',
		serieFechados: 'among wins only',
		eixoX: 'days since entering negotiation',
		aria: 'Curve of won deals over time: counting every deal that came in it levels off near 51%; among wins only it reaches 100%',
		cuidado:
			'The dataset only records resolutions between March and December 2017. To keep the curve honest, I used only deals that entered between 2017-03-01 and 2017-08-15, which have the full 138 days of observation, and left out the unusual block shown further down.',
	},
	sim: {
		titulo: 'Explore: a deal open for X days',
		intro: 'The question that helps whoever manages a pipeline the most. Pick how many days the deal has been in negotiation and which month of the quarter it came in.',
		dias: 'Open for',
		diasUn: 'days',
		mes: 'Came in during the',
		meses: ['1st month of the quarter', '2nd month', '3rd month'],
		g30: 'Is won in the next 30 days',
		gAlgum: 'Is ever won',
		parado: 'Stays stuck forever',
		curva: 'Chance of being won in the next 30 days, by age',
		aria: 'Curve of the chance of being won in the next 30 days by deal age',
		base: (n: string) => `Based on ${n} historical deals that were open at this age.`,
		morto: 'After 138 days, no deal in the history was won or lost.',
	},
	receita: {
		titulo: 'From chance to revenue',
		texto: [
			'A 4,000 deal with a 30% chance of being won in November counts as 1,200 in the November forecast. Adding that up for every open deal, and for the deals still to come that month, gives the expected revenue.',
			'The chance comes from history: among deals that were open at the same age, in the same month of the quarter, what share was won each day. I tested which features deserved a place. Only age and the calendar improved the forecast; product, rep, manager, region and account size did not.',
		],
		testeTitulo: 'The honest test',
		testeTexto:
			'I went back to 2017-09-30 and asked each model, using only what was known that day, how much revenue the open deals would bring in the next quarter. Then I compared it with what happened.',
		barras: {
			real: 'What happened',
			m0: 'Pipeline × win rate',
			m1: 'Deal age only',
			m2: 'Age + calendar',
			m3: 'Age + calendar + alarm',
		},
		aria: 'Bars comparing the revenue each model predicted with actual revenue in Q4 2017',
		notas: [
			'<strong>57% of the quarter’s revenue</strong> came from deals that did not exist on 09/30. The full forecast adds that part, projected from the entry rate of the previous 90 days (2% error).',
			'Across seven cut-off dates, forecasting the next month, the average error was <strong>35%</strong> with age only, <strong>18%</strong> with age and calendar, and <strong>13%</strong> with the alarm.',
		],
	},
	alarme: {
		titulo: 'The inflated pipeline alarm',
		texto: [
			'The biggest remaining error came from a block of deals that got stuck. It was not the whole company: it was the Central region, which usually opens about 62 deals a week and opened 540 in three weeks. Of those, 355 were never won or lost.',
			'The rule flags a week when two things happen together, using only what is known on the forecast date: the region’s new deals reach 1.5 times its normal level, and the share resolved within 20 days falls well below the other regions in the same week. The estimated excess is removed from the forecast.',
			'Without the first condition, the West region was flagged five times with no spike at all. With both, only the three Central weeks show up.',
		],
		eixo: 'new deals per week',
		aria: 'Weekly lines of new deals by region; Central jumps above 200 a week in late July 2017',
		regionais: { Central: 'Central', East: 'East', West: 'West' },
		destaque: 'flagged weeks',
	},
	falhou: {
		titulo: 'What did not work',
		itens: [
			'<strong>Logistic regression of won vs. lost.</strong> Trained on resolved deals, it separated wins from losses no better than a coin flip (AUC 0.49 to 0.53). In this dataset, winning or losing depends largely on when the deal is resolved.',
			'<strong>More features in a tree model.</strong> With product, rep, manager and region, it improved on one test and got worse on the other: it memorized noise.',
			'<strong>The empty account field.</strong> Every deal without an account is still open, so the field gives away the outcome. Using it in the test would mean using the future, so it stayed out.',
		],
	},
	limites: {
		titulo: 'Limits and next steps',
		itens: [
			'The dataset is synthetic. The method holds; the numbers belong to this fictional company.',
			'There is no activity history. With it, "days since last contact" would likely be the strongest feature.',
			'Seven tests are too few to state the accuracy with confidence.',
		],
		proximos: 'Next steps: deliver the forecast as a range, with how confident we are that the actual falls inside it, and explain in plain language why each deal is at risk.',
	},
	fim: { codigo: 'The full notebook, with code and outputs, is on GitHub.', voltar: 'Back to To explore' },
};

export const esseDeal = { pt, en };
export const useEsseDeal = (locale: string | undefined) => esseDeal[getLang(locale)];
