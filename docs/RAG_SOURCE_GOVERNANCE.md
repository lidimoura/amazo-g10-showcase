# Governança de fontes do RAG — Amazô.guia

## Propósito público

Este documento define o que a LP pode afirmar sobre a base documental da Amazô. O objetivo é garantir que a página explique o critério de entrada de uma fonte sem exibir a ferramenta interna de curadoria, links de trabalho, conversas, dados pessoais ou documentos ainda não autorizados.

> **Princípio de autonomia:** a CEO Lídi Moura escolhe quais documentos se tornam fonte de verdade, aprova sua versão e autoriza seu uso. A ferramenta de curadoria organiza a pesquisa; ela não determina a verdade do agente.

## Catálogo público e base RAG são coisas diferentes

O showcase apresenta apenas a **estrutura da fonte de verdade em construção**. Ferramentas e materiais usados na pesquisa, organização e criação da documentação permanecem internos e não são fonte automática de resposta. A Amazô consultará somente documentos aprovados pela Lídi para uso no RAG.

| Camada | Pode aparecer na LP | Pode alimentar o RAG | Exemplo de conteúdo |
|---|---|---|---|
| Materiais de pesquisa e criação | Não. | Não automaticamente. | Referências de estudo, rascunhos, organização e ferramentas de curadoria. |
| Fonte de verdade do agente | Sim, quando aprovada e sem conteúdo restrito. | Sim, com versão, responsável e finalidade de uso. | Catálogo de serviços aprovado, FAQ institucional, políticas públicas e apresentação institucional revisada. |
| Dado operacional ou pessoal | Não. | Não no MVP público. | CRM, leads, conversas privadas, banco de produção e documentos internos sensíveis. |

## Núcleos documentais em construção

| Núcleo | Finalidade no RAG | Estado público |
|---|---|---|
| 00 — Índice e governança | Define versão, status, glossário e regra de atualização. | Em construção. |
| 01 — Trajetória profissional | Responde sobre experiência, formação e atuação atual. | Em curadoria. |
| 02 — Encontro d’Água Hub | Explica posicionamento, público, impacto e canais oficiais. | Em curadoria. |
| 03 — Hub OS | Explica método operacional, segurança e processos permitidos. | Em curadoria. |
| 04–06 — Ofertas e regras | Organiza produtos, serviços e regras de negócio autorizadas. | Em curadoria. |
| 07–08 — Processos e portfólio | Contextualiza etapas de projeto e experiências validadas. | Em curadoria. |

## Contrato mínimo para uma fonte entrar no RAG

Cada documento precisa ter responsável, versão/data, público permitido, finalidade de resposta e aprovação explícita da Lídi. Documentos sem essas propriedades ficam fora da ingestão. O agente deve citar a fonte ou declarar falta de evidência quando a base não sustentar uma resposta.

## Estado atual

O Challenge está em curadoria de fonte. A LP apresenta o modelo de governança e os núcleos documentais em construção, mas não declara uma base ativa antes da aprovação da Lídi. A seleção nominal será registrada em catálogo separado no repositório técnico `amazo-guia-g10` antes da ingestão.

O estado público desse catálogo será lido pelo showcase por meio do manifesto técnico `showcase-status.yml`, segundo o contrato registrado em [`SHOWCASE_SYNC_CONTRACT.md`](./SHOWCASE_SYNC_CONTRACT.md). O manifesto não substitui a revisão humana nem autoriza documentos ainda não aprovados.

## Referências internas

1. Prévia de estrutura da fonte de verdade do Encontro d’Água Hub e da trajetória profissional, fornecida pela Lídi Moura em 2026-08-22.
2. `docs/CHALLENGE_G10_RULES_EVIDENCE.md` e `docs/DEVLOG.md` do showcase.
