# Contrato de sincronização — Amazô.guia → Showcase

## Objetivo

Manter a LP fiel ao estado verificável do Challenge G10 sem confundir **processo interno**, **hipótese técnica**, **fato aprovado** e **publicação já validada**. O repositório `amazo-guia-g10` é a fonte técnica; a LP é a tradução pública, editorial e rastreável desse estado.

> A sincronização prepara e compara atualizações. A decisão de tornar qualquer informação pública continua sendo da Lídi Moura.

## Fonte canônica de leitura

O manifesto [`showcase-status.yml`](https://github.com/lidimoura/amazo-guia-g10/blob/main/showcase-status.yml), no repositório técnico, conterá somente campos públicos e revisáveis. A LP pode refletir o manifesto e documentos explicitamente aprovados para divulgação; não deve inferir fatos a partir de rascunhos, commits genéricos, README, DEVLOG ou arquivos internos.

| Tema da LP | Campo técnico esperado | Exemplo de reflexo permitido |
|---|---|---|
| Estágio do Challenge | `project.phase` | “Fundação documental”, “ingestão validada” ou “testes em andamento”. |
| Fonte de verdade | `rag.source_catalog_status` e `rag.approved_document_groups` | Núcleos liberados, sem transcrever documentos ou conteúdo confidencial. |
| Funcionamento do RAG | `rag.ingestion_status` e `rag.test_status` | Estado de ingestão, testes e limites validados. |
| Galeria de provas | `showcase.public_evidence` | Print, vídeo, log sanitizado ou métrica explicitamente aprovada. |
| Aviso de mudança | `showcase.update_required` e `showcase.update_reason` | Preparação do diff que a CEO revisará. |

## Fluxo principal: sincronização sob solicitação

Enquanto os documentos de verdade estiverem em curadoria, a sincronização ocorre quando a Lídi solicitar `sincronizar showcase com amazo-guia-g10`. A leitura compara o manifesto do Challenge com a versão atual da LP e produz um **relatório de impacto**: campos alterados, possíveis seções afetadas, conteúdo que não pode ser exposto e diff proposto. A rotina não publica sozinha.

| Etapa | Responsável | Resultado |
|---|---|---|
| Alterar estado técnico | Lídi | Manifesto e DEVLOG atualizados com fato verificável. |
| Detectar impacto | Manus, sob solicitação da Lídi | Relatório de mudanças relevantes para o showcase. |
| Aprovar texto e imagem | Lídi | Autorização explícita de atualização pública. |
| Atualizar LP | Manus | Build, validação responsiva, checkpoint e diff. |
| Publicar e verificar | Manus, após confirmação | GitHub Pages validado e DEVLOG atualizado. |

Não há rotina recorrente ativa nesta fase. A Lídi poderá solicitar a sincronização a qualquer momento, em especial após aprovar fontes de verdade, concluir ingestão, validar testes, adicionar evidências ou alterar o estado do Challenge. Uma revisão automática só será considerada em decisão futura explícita.

## Evolução futura: atualização por evento

Quando o manifesto estiver estabilizado, a rotina poderá evoluir para um evento de `push` do GitHub. A implementação exigirá um endpoint ativo, validação da assinatura `X-Hub-Signature-256`, segredo em variável de ambiente e processamento somente de mudanças no manifesto público. O evento preparará um relatório e um diff; ele não fará publicação automática sem uma regra de aprovação explicitamente alterada pela Lídi. O GitHub documenta que webhooks enviam dados a uma URL configurada para eventos de repositório.[1]

## Princípios de segurança

O contrato proíbe o envio à LP de dados de clientes, CRM, Supabase, PII, segredos, valores não aprovados, prompts internos, documentos privados ou pesquisa criativa. Sem um status, uma versão e uma aprovação identificáveis, a informação permanece fora do showcase.

## Referências

[1]: https://docs.github.com/en/webhooks/about-webhooks "GitHub Docs — About webhooks"
