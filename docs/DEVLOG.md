# DEVLOG — Showcase Amazô G10

## 2026-08-18 — Fundação da LP de showcase

### Objetivo

Criar uma landing page pública que sirva simultaneamente como apoio visual ao Challenge G10, demonstração do método Hub OS e peça de portfólio para clientes, leads e recrutadores.

### Decisão de narrativa

Foi adotada a direção **Caderno de Campo Fluido**. A página apresenta o projeto como pesquisa aplicada: primeiro define o que está provado, em seguida explicita o fluxo RAG, registra evidências e delimita a evolução futura. O objetivo é evitar a comunicação de “caixa-preta” e tornar visíveis fonte, método, limite e próximo passo.

### Métricas e transparência

Os números mostrados na primeira versão obedecem à seguinte classificação:

| Indicador | Valor | Classificação | Fonte/observação |
|---|---:|---|---|
| Fontes catalogadas | 14 | Evidência disponível | Notebook G10 — Challenge agente Amazô. |
| Camadas de verdade | 4 | Decisão arquitetural | Verdade de negócio, institucional, operacional e memória conversacional. |
| Dados de clientes no MVP G10 | 0 | Limite confirmado | O MVP acadêmico deve permanecer isolado de produção. |
| Métricas de QA | Groundedness, recusa, latência e custo | Próxima medição | Devem ser preenchidas apenas após os testes reais do agente. |

Nenhuma taxa de acerto, volume de leads, tempo economizado, custo ou resultado comercial foi inventado. Métricas futuras deverão receber uma fonte, janela de coleta, método, versão do agente e data de atualização antes de entrar na página.

### Evidências visuais pendentes

A galeria foi implementada como estrutura preparada para mídia aprovada. Antes da publicação final, inserir apenas materiais que não contenham credenciais, PII, dados de clientes, conversas privadas ou conteúdo sem consentimento. Cada print, vídeo ou log deve ter uma legenda que informe o que demonstra, data, ambiente e se a evidência é local, de homologação ou de produção.

### Limites de escopo

O showcase não habilita nem presume acesso da Amazô ao Supabase de produção, CRM, Typebot ou Hub OS. A eventual integração permanece uma proposta condicionada a inventário técnico, RLS, RBAC, contrato idempotente de lead, feature flag, rollback e aprovação humana.

### Validação executada

Foram executados `pnpm check` e `pnpm build` com sucesso. A página também foi verificada em desktop e viewport mobile. A revisão visual independente confirmou aderência à direção de design e não indicou ajustes obrigatórios.

## 2026-08-18 — Linha de evolução, trajetória e autoria

### Objetivo

Ampliar o showcase para documentar a evolução da Amazô sem usar datas na interface: da representante digital e SDR via Typebot ao agente documental proposto no Challenge G10. A atualização também deve apresentar Lídi Moura, sua trajetória e o papel do Hub Encontro d’Água no projeto.

### Fontes de referência

O repositório público `lidimoura/amazo.ia-showcase` foi usado apenas como fonte histórica e visual. A imagem `assets/amazo.jpeg` foi importada da branch `main` para o armazenamento da LP, preservando a autoria visual existente. O README do repositório documenta a versão Typebot como parte do showcase e o posicionamento da Amazô como IA-SDR do Hub.

### Transparência de autoria

A página declara que IA-Native é um método de trabalho sob governança humana. Lídi define o problema, escolhe e estrutura fontes, configura agentes e ferramentas, valida resultados, decide regras de negócio e aprova qualquer entrega. A IA generativa é apresentada como instrumento de colaboração e aceleração, não como autora autônoma do projeto.

## 2026-08-18 — Identidade visual centrada na Amazô

### Objetivo

Substituir elementos visuais genéricos e ilustrações geradas nos pontos de marca mais visíveis da LP pela imagem oficial da Amazô, preservada no repositório público `lidimoura/amazo.ia-showcase`.

### Decisão

Foram usadas duas variações oficiais: o close do rosto para a marca do menu, o hero e o estágio de evidências; e a ilustração com a muda para a arquitetura e a seção de trajetória. A paleta e o tratamento de linhas foram ajustados para verde profundo, cobre e verde-água, extraídos visualmente dessa referência. A imagem não foi alterada; apenas recebeu recorte responsivo e sobreposições para legibilidade.

### Limite

Esta atualização é de identidade e comunicação. Ela não altera o escopo do MVP G10, a base documental, o comportamento do agente ou as integrações de produção.

## 2026-08-18 — Sistema cromático Samambaia

### Referência

Foi fornecida uma paleta derivada de uma fotografia de samambaia: `#391E13` (terra), `#648D3C` (folha), `#D7F993` (broto/luz), `#D9AAA1` (mineral rosado) e `#3E2128` (vinho profundo).

### Aplicação

O sistema foi aplicado de modo semântico: terra e vinho para fundos de profundidade; folha para áreas de método e sustentação; lima para ação, estado ativo e sinal de evidência; rosa mineral para superfícies editoriais e percurso; e verde-amarelado para contraste e destaque. A Amazô permanece como elemento visual principal e os retratos oficiais não foram modificados.

## 2026-08-18 — Fotografia autoral da samambaia no topo

### Origem e autoria

Foi incorporada ao hero a fotografia autoral `DSCF8346.webp`, capturada por Lídi Moura no Amazonas durante sua atuação anterior como fotógrafa. A imagem foi disponibilizada pela própria autora exclusivamente para esta LP.

### Decisão de composição

A foto funciona como paisagem de fundo do topo, com sobreposição para preservar contraste. O retrato da Amazô e o card **Caderno de Campo** foram reorganizados em uma coluna visual própria: o retrato fica acima e o card abaixo, sem sobreposição entre os dois elementos.

## 2026-08-18 — Hero fotográfico limpo

Por solicitação da autora da fotografia, foram removidos do topo o filtro cromático, as linhas circulares, o traço de fluxo e o ruído decorativo. A fotografia passa a ser exibida como única camada de fundo. A legibilidade é preservada por sombra aplicada apenas ao texto e por superfícies próprias no retrato e no card, sem colorir ou cobrir a imagem.

## 2026-08-18 — Assinatura de corrente e emblema Amazô

Para manter o hero fotográfico limpo e, ao mesmo tempo, reforçar o sistema de pesquisa aplicada, a linha de corrente foi deslocada para o corpo da página. Ela conecta as seções posteriores como um traço de investigação. O header e o footer passaram a incluir um emblema vetorial próprio, formado por gota-rio, folha e nós de conhecimento, ao lado do retrato oficial da Amazô.

## 2026-08-18 — Passagem de contraste e legibilidade

Foi criada uma camada de contraste semântico para a LP inteira. O hero mantém a fotografia autoral sem filtro global; apenas o bloco de copy passou a ter uma superfície editorial local, para que títulos e parágrafos não concorram com a luminosidade da samambaia. Nas demais seções, cores de texto, microcopy, estados, CTAs, cards e foco de teclado foram reforçados conforme cada superfície clara ou escura. A intervenção melhora legibilidade sem substituir a paleta samambaia.

## 2026-08-18 — Crédito de fotografia autoral

O hero passou a exibir o crédito **“Fotografia autoral · Lídi Moura · Amazonas, Brasil”**. A atribuição fica sobre o canto inferior da imagem, com sombra de texto para legibilidade e sem filtro sobre a fotografia. O arquivo `docs/README.md` também passou a registrar a origem e o uso dos ativos visuais principais.

## 2026-08-18 — Artefato de validação e assinatura de marca

O emblema e o wordmark da Amazô foram ampliados no header para dar mais presença à assinatura própria de gota-rio, folha e nós de conhecimento. A seção de evidências passou a mostrar um cartão de validação explícito: base catalogada, referência ao notebook G10 e o próximo artefato esperado. Esse cartão declara o estágio real da prova, sem simular métricas nem resultados do agente.

## 2026-08-18 — Marca institucional do Hub

O emblema vegetal do header e do footer foi substituído pelo logotipo oficial do Hub Encontro d’Água, fornecido pela Lídi Moura. A Amazô permanece como personagem visual do showcase; o novo selo explicita que o projeto integra a identidade institucional da Holding. O logotipo é exibido em recorte circular e com tratamento de contraste adequado aos fundos escuros da LP.

## 2026-08-20 — Hierarquia entre Amazô e Hub

O Hub Encontro d’Água passou a atuar somente como assinatura institucional no footer, usando a versão transparente dourada do logotipo. O header foi devolvido à Amazô: personagem, nome e contexto do Challenge. Essa separação evita duplicidade visual, mantém o contraste sobre o verde profundo e diferencia produto/representante digital da instituição que o sustenta.

## 2026-08-20 — Estudos visuais da Amazô para o Challenge

Foram preparados três novos estudos de alta qualidade para substituir as imagens anteriores da Amazô: retrato guardião, retrato com caderno de campo e guardiã da muda. Os prompts preservam traços faciais limpos e removem folhas, cipós, tatuagens botânicas, grafismos e pintura do rosto. A simbologia vegetal aparece apenas no pescoço, nos braços e na vestimenta. As três imagens foram aplicadas em contextos diferentes da LP para que o personagem se mantenha coerente sem repetição excessiva.

## 2026-08-20 — Opção D aprovada provisoriamente

A Lídi aprovou provisoriamente a Opção D — Rio Neon como imagem principal da Amazô. Ela foi aplicada no hero, na assinatura de navegação, na seção de trajetória e no footer; os outros estudos permanecem preservados. O refinamento seguinte, ainda pendente por indisponibilidade de geração, será mais digital-editorial e menos pictórico/anime. O brief completo foi registrado em `docs/AMAZO_D_REFINEMENT_BRIEF.md`; nenhuma nova imagem deve substituir a D sem aprovação explícita da Lídi.

## 2026-08-21 — Conjunto L1, L2 e L3 aplicado ao showcase

### Decisão aprovada

A Lídi aprovou a atualização da LP com a rodada complementar de imagens de peito limpo. A composição aplicada distribui **L1 — Hero Limpo** no hero e nas assinaturas compactas, **L2 — Caderno** no estágio de processo/evidências e **L3 — Fluxo** na arquitetura do RAG e do método AI-Native. A Opção D — Rio Neon foi retirada dos pontos principais, mas preservada como estudo histórico.

### Critérios visuais preservados

Os três ativos mantêm dreads em marrom-terra, verde-rio, musgo, cobre e vinho contido; rosto e pescoço sem botânica, símbolos ou linhas de dados; e botânica reduzida a linework discreto nos braços. A planta, raízes e traços botânicos foram removidos integralmente de peito e decote.

### Reforço da direção Caderno de Campo Fluido

Foram adicionados marcos de rota às macroseções, metadados de arquivo aos retratos e uma faixa de auditoria na galeria de evidências. A linha de corrente ganhou maior presença como percurso de pesquisa, e os estados de ação/evidência preservam Broto `#D7F993` e Verde Samambaia `#648D3C` como cores semânticas centrais.

### Validação

`pnpm run build` foi executado com sucesso. A página foi verificada em desktop (1280×720) e mobile (375×812). Nenhum erro de compilação foi observado. O aviso de bundle acima de 500 kB permanece como otimização futura, sem impedir a compilação atual.

## 2026-08-22 — Links do ecossistema e preparação para GitHub Pages

### Links organizados

A LP passou a incluir uma seção editorial de referências que distingue o repositório técnico `amazo-guia-g10`, a origem pública da Amazô via Typebot, o código histórico correspondente, o LinkedIn profissional e o portfólio Link d’Água. O Hub OS aparece como método de trabalho, com rótulo explícito de acesso de repositório restrito; não foi exposto como destino público inexistente.

### Publicação estática preparada

Foi criado um caminho de exportação portátil para GitHub Pages. No ambiente Manus, a LP mantém URLs de armazenamento gerenciado; na exportação, a variável `VITE_PUBLIC_EXPORT=true` passa a usar cópias locais dos ativos aprovados em `client/public/assets`. O workflow de Pages compila somente a camada estática e publica `dist/public` sem credenciais.

### Evidências de validação

O nome proposto `lidimoura/amazo-g10-showcase` estava disponível na consulta de 2026-08-22. O build local, a checagem TypeScript e o build de uma cópia exportada foram concluídos. A cópia contém os seis ativos necessários e foi gerada com base `/amazo-g10-showcase/`.

### Limite de governança

Nenhum repositório foi criado, tornado público, enviado ao GitHub ou publicado no Pages. A alteração do repositório técnico `amazo-guia-g10` permanece pendente até a confirmação da URL final e da aprovação explícita da Lídi.

## 2026-08-22 — Correção institucional: Hub OS

Por decisão explícita da Lídi Moura, a nomenclatura institucional do showcase foi corrigida de **Hub OS NEXUS** para **Hub OS**. O repositório oficial de referência passou a ser `https://github.com/lidimoura/Hub_OS`, confirmado como privado. A LP, a meta descrição, o README, o DEVLOG, o registro de links e as classes públicas internas foram atualizados para não preservar a denominação anterior.

`pnpm run check`, `pnpm run build` e a exportação estática com `pnpm run build:pages` foram concluídos após a correção. A publicação externa continua pendente de aprovação explícita.

## 2026-08-22 — Showcase público e GitHub Pages validados

Após aprovação explícita da Lídi, foi criado o repositório público [`lidimoura/amazo-g10-showcase`](https://github.com/lidimoura/amazo-g10-showcase). A fonte da LP foi enviada à branch `main`, e o build estático foi publicado na branch `gh-pages`. O GitHub Pages foi configurado para essa branch e a URL `https://lidimoura.github.io/amazo-g10-showcase/` foi validada com o hero e a navegação carregados.

Durante a validação, a primeira versão publicada revelou que o roteador cliente não respeitava o caminho base do Pages. O roteamento foi corrigido para usar a base de Vite quando `GITHUB_PAGES=true`; os builds local e estático foram executados novamente, e a publicação corrigida passou a carregar a rota inicial corretamente.

O README de `amazo-guia-g10` recebeu uma referência curta ao showcase e foi corrigido de Hub OS NEXUS para Hub OS. Nenhum código do MVP RAG foi incorporado à LP; os repositórios permanecem separados por finalidade.

## 2026-08-22 — Autonomia editorial, fontes RAG e correção do Hub OS

### Retornos da CEO incorporados

Por solicitação da Lídi, foram removidos dos retratos da Amazô os rótulos “retrato documentado · peito limpo”, carimbos de arquivo e a menção a “ilustração aprovada”. A imagem permanece como identidade visual, sem transformar uma decisão estética em alegação técnica.

### Correção de layout

A quebra da seção **Hub OS como método** ocorreu porque as classes públicas foram renomeadas, enquanto as regras estruturais no CSS-base ainda usavam os seletores antigos. O bloco foi reconstruído com uma grade explícita de quatro cartões — Diagnóstico, Arquitetura, Desenvolvimento e QA + entrega — que muda para duas colunas e depois uma coluna em telas menores. Desktop e mobile foram revisados após o ajuste.

### O que “Caderno de Campo” significa nesta LP

“Caderno de Campo” é uma **metáfora editorial**, não uma ferramenta externa, painel de monitoramento ou base de dados. Ele organiza visualmente três leituras para o visitante: o que já foi decidido, o que está em validação e o que ainda é proposta. A CEO continua sendo a autoridade sobre conteúdo, fonte, aprovação e publicação.

### Fontes de pesquisa versus fontes de verdade

Materiais e ferramentas de pesquisa permanecem internos. A LP não expõe links, contagens, conteúdos ou detalhes de processo criativo. Só podem entrar no RAG documentos aprovados, versionados, com responsável e finalidade de resposta. O catálogo nominal depende da seleção explícita da Lídi.

## 2026-08-22 — Catálogo público de fonte de verdade

Por decisão da Lídi, o showcase deixou de exibir qualquer contagem ou referência ao acervo interno usado no processo criativo do Challenge. A seção **Catálogo e evidências** agora descreve exclusivamente a fonte de verdade em construção para a Amazô: índice e governança; trajetória; Encontro d’Água Hub; Hub OS; produtos; serviços; regras de negócio; processos; e portfólio.

A página explica o contrato mínimo de entrada — documento aprovado, versão, responsável e finalidade de resposta — e exclui CRM, dados pessoais, material de pesquisa e conteúdo confidencial. A lista nominal de arquivos permanece sob aprovação da CEO, antes de qualquer ingestão no RAG ou divulgação pública.

## 2026-08-22 — Sincronização sob solicitação com amazo-guia-g10

Foi definido um contrato público de sincronização entre o repositório técnico e o showcase. O manifesto `showcase-status.yml` concentra apenas estados públicos do Challenge, catálogo de fonte de verdade, testes e evidências aprovadas. A LP não fará inferências a partir de rascunhos ou documentação interna.

Por decisão da Lídi, não haverá rotina recorrente enquanto a fonte de verdade estiver em construção. A atualização será acionada sob demanda pela solicitação `sincronizar showcase com amazo-guia-g10`; ela produzirá relatório de impacto e diff antes de qualquer publicação. O desenho de atualização por evento permanece apenas documentado para evolução futura, com validação de assinatura e segredo por variável de ambiente.
