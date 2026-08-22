# Auditoria de sincronização — fontes de verdade da Amazô.guia

**Data de leitura:** 22 de agosto de 2026  
**Repositório técnico:** `lidimoura/amazo-guia-g10`  
**Commit auditado:** `1e1fc39` — `docs: add approved Amazo guia truth sources`  
**Escopo:** Atualização editorial e transparente da LP. Não é registro de ingestão, teste ou deploy do RAG.

## Fatos publicáveis confirmados

| Fato | Evidência técnica | Reflexo aplicado na LP |
|---|---|---|
| Existe uma fonte de verdade pública na versão 2.1. | `data/sources/public/00-README-e-ordem.md`. | O catálogo passa a ser apresentado como versionado, não apenas planejado. |
| Há nove documentos substantivos disponíveis, além do índice de ordem. | Diretório `data/sources/public/` no commit auditado. | Métrica `09` passa a significar documentos, não núcleos abstratos. |
| A fonte está organizada em duas camadas de ingestão. | Índice de ordem: atendimento público primeiro, complemento depois. | O catálogo visual mostra as duas camadas. |
| A Amazô.guia continua em desenvolvimento. | `05-amazo-guia.md`, status `em_desenvolvimento`. | Não se afirma agente funcional, deploy, ingestão ou testes concluídos. |
| Ingestão e QA ainda são próximos incrementos. | `showcase-status.yml`: `ingestion_status: nao_iniciada`, `test_status: nao_iniciado`. | A LP mantém prints, vídeo e caderno de testes como pendentes. |

## Limites preservados

O manifesto de sincronização ainda registra o catálogo como `em_construcao` e sem grupos aprovados. Isso não anula os documentos públicos recém-adicionados; indica que a CEO ainda precisa confirmar a lista nominal que será ingerida e atualizar o manifesto. Por transparência, a LP afirma que a fonte existe e é versionada, mas não declara RAG ativo ou documentos já ingeridos.

O material comercial, os canais e a trajetória foram lidos como fontes públicas. Nesta atualização, não foram usados para alterar preços, promessas comerciais, contatos ou claims de experiência, porque a solicitação atual é sincronizar o estado do RAG e sua fonte de verdade. Essas mudanças exigiriam revisão editorial específica.

## Próxima sincronização esperada

Quando a Lídi aprovar a lista de arquivos para ingestão, o manifesto deverá passar a informar `approved_document_groups`, estado de ingestão e estado de testes. A LP poderá então refletir quais grupos foram carregados, quais perguntas foram validadas e quais limites foram observados, sem expor o conteúdo integral dos documentos.
