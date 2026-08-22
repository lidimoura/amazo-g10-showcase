# Direção de Design — Amazô G10 Showcase

## Três abordagens consideradas

| Tema | Introdução breve | Probabilidade |
|---|---|---:|
| **Caderno de Campo Fluido** | Um relatório vivo de pesquisa e produto: a linguagem de caderno de campo se encontra com fluxos de dados que parecem rios. A página transmite autoria, evidência e movimento sem perder calor humano. | 0.07 |
| **Museu da Evidência** | Uma galeria clara e tátil, quase curatorial, onde cada teste, decisão e artefato é tratado como peça de exposição. A sensação é de método e maturidade profissional. | 0.04 |
| **Infraestrutura Viva** | Uma experiência noturna, densa e técnica, baseada em mapas de sistemas, nós e telemetria. A mensagem é de engenharia avançada e operação contínua. | 0.09 |

## Abordagem escolhida — Caderno de Campo Fluido

### Movimento de design

**Editorial de pesquisa aplicada com biomorfismo de dados.** A referência não é um dashboard genérico: é um caderno de campo contemporâneo em que rios, camadas de solo, anotações de método e fluxos de informação constroem uma narrativa de investigação.

### Princípios centrais

1. **Evidência antes de promessa:** toda seção deve indicar origem, método, versão, critério ou próximo passo.
2. **Assimetria deliberada:** colunas deslocadas, linhas de leitura laterais e cartões que se encaixam como páginas de pesquisa, evitando uma sequência de blocos centralizados.
3. **Natureza como sistema:** curvas de rio, camadas, nós e fluxos representam RAG, fontes e handoffs, sem recorrer a metáforas decorativas vazias.
4. **Transparência como estética:** status, limites, anotações e validações são elementos visuais de primeira classe.

### Filosofia de cor

A paleta parte de uma fotografia autoral de samambaia no Amazonas: **terra `#391E13`** e **vinho `#3E2128`** criam profundidade; **folha `#648D3C`** sustenta áreas de método; **broto `#D7F993`** sinaliza evidência, ação e estado ativo; e **mineral rosado `#D9AAA1`** forma as superfícies editoriais. Em vez de gradientes roxos ou neon, as cores funcionam como um mapa ambiental: profundidade, margem, sinal e calor.

### Paradigma de layout

Uma página em forma de **margem de rio editorial**. No desktop, um trilho vertical fino acompanha a leitura como índice de campo, enquanto o conteúdo alterna entre área principal e cartões deslocados. Em mobile, o trilho vira marcador de progresso horizontal e as evidências passam para uma sequência única, sem perder hierarquia.

### Elementos de assinatura

1. **Linha de corrente:** um traço curvo e fino percorre a página, conectando desafio, processo, evidência e evolução futura.
2. **Selos de caderno:** chips retangulares com status como “evidência”, “em validação” e “integração futura”.
3. **Marcas de margem:** pequenas notas tipográficas e coordenadas de seção que reforçam o tom de pesquisa aplicada.

### Filosofia de interação

Cada interação deve revelar método, não distração. Cartões de métricas expandem para explicar a metodologia; o menu leva diretamente a âncoras; os espaços para vídeo e print deixam claro o tipo de evidência esperado.

### Animação

As curvas e nós devem entrar com deslocamento leve e opacidade, como dados se acomodando no mapa. Entradas em sequência de 40–70 ms, duração de 220–280 ms e easing `cubic-bezier(0.23, 1, 0.32, 1)`. Sem parallax agressivo e com redução integral de movimento para `prefers-reduced-motion`.

### Sistema tipográfico

**DM Serif Display** para títulos e números-chave, com tom editorial e autoria. **Manrope** para corpo, rótulos e dados técnicos, garantindo leitura de tela. Títulos são densos e curtos; rótulos usam caixa alta com tracking amplo; parágrafos priorizam frases objetivas e verificáveis.

### Essência de marca

**Amazô G10 é uma demonstração rastreável de como um agente documental pode nascer de método, repertório e tecnologia com propósito.** Personalidade: **metódica, calorosa e avançada**.

### Voz de marca

Headlines soam como achados de uma investigação; CTAs convidam a verificar, não prometem milagres. Microcopy deve nomear o limite e o próximo passo.

> “Um agente não é só a resposta. É a evidência que sustenta cada resposta.”

> “Veja o que foi validado, o que permanece em teste e para onde a Amazô pode evoluir.”

### Wordmark e logo

O símbolo é uma **gota-rio que se desdobra em três nós de conhecimento e uma folha**, formando uma corrente que representa fonte, recuperação e resposta. O wordmark combina uma serifada de alto contraste com uma sans técnica; não usar texto em fonte padrão como logo.

### Cor de assinatura

**Verde Samambaia — `#648D3C`**. Um verde orgânico e estruturante, usado para sustentar o método, o sistema e a presença amazônica da marca.

## Decisões de estilo

- A Amazô utiliza linguagem **editorial-documental premium**: dossiê de evidências, caderno de campo, arquivo de pesquisa e ilustração cultural amazônica; nunca futurismo SaaS genérico.
- A hierarquia é conduzida por serifada editorial de alto contraste em grande escala, combinada a rótulos utilitários e contidos para metadados, evidências e notas de processo.
- A voz deve soar como documentação de pesquisa responsável: precisa, autoral, consciente da fonte e centrada em pessoas. Alegações sobre IA ou produto só aparecem quando vinculadas a evidência, limite ou aprovação.
- A **linha de corrente** deve atuar como espinha estrutural entre as grandes seções do projeto, sempre fora da fotografia do hero; o topo fotográfico permanece limpo por decisão da autora.
- Cada seção importante deve preservar ao menos um artefato de campo: marca de margem, coordenada, selo de status, cartão deslocado ou nota de evidência.
- O emblema Amazô — gota-rio, folha e três nós — e o wordmark serifado/técnico devem aparecer juntos no header e no footer como assinatura proprietária.
- A cor **Broto `#D7F993`** é reservada para evidência, status ativo e ações primárias de verificação; não funciona como detalhe decorativo genérico.
- Seções de evidência devem exibir pelo menos um artefato concreto de validação: cartão de fonte, nota de método, selo de status, print anotado ou traço de aprovação.
