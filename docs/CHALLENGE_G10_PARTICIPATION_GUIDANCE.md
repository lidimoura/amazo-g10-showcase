# Parecer construtivo — participação no Challenge G10 com Hub OS AI-Native

## Conclusão executiva

Com base no documento oficial do Challenge e na live de suporte consultados em 18 de agosto de 2026, o uso da Holding AI-Native, de agentes próprios e de ferramentas como assistentes de desenvolvimento é **compatível com a proposta do G10**, desde que a entrega seja um projeto autoral, funcional, documentado e demonstrável. A documentação oficial pede explicitamente uma solução com ferramentas e modelos de IA; a live registra que Gemini e ChatGPT podem auxiliar em várias etapas do projeto. Não foi encontrada regra que proíba concluir o trabalho em um período curto.

Essa é uma leitura técnica e documental, não uma autorização individual da equipe avaliadora. A validação final continua condicionada às regras da plataforma no momento da submissão e à avaliação do projeto entregue.

## Por que o trabalho em 48 horas não invalida a entrega

Os critérios oficiais recuperados concentram-se no agente funcional, no código organizado, no README, no histórico de commits e na evidência de deploy. A documentação não estabelece uma duração mínima de desenvolvimento. Uma conclusão concentrada em menos de 48 horas é defensável quando há repertório prévio, método próprio, documentação de processo e evidências verificáveis. O ponto crítico não é “quanto tempo levou”, mas **o que foi de fato construído, testado, compreendido e demonstrado**.

## Uso correto da Holding AI-Native

O Hub OS pode ser apresentado como infraestrutura metodológica autoral para organizar diagnóstico, fontes, arquitetura, desenvolvimento, QA, documentação e evidências. A descrição mais segura é:

> A solução foi idealizada e governada por Lídi Moura. O Hub OS AI-Native foi utilizado como método de organização e qualidade. Assistentes de IA apoiaram pesquisa, prototipação e revisão sob instruções, validação e aprovação humana.

Evitar dizer que a IA “fez o projeto sozinha”. Também não apresentar automações futuras, CRM de produção ou dados reais como se fossem parte do MVP acadêmico. O Challenge deve permanecer um projeto novo, isolado, com fontes autorizadas e sem segredos ou PII.

## Repositório novo com templates próprios

Criar um repositório específico para o G10 com templates próprios de README e DEVLOG é uma boa prática. Os templates devem ser adaptados ao agente do Challenge e não substituem a documentação do que foi implementado. O repositório precisa tornar visíveis as decisões específicas do G10, os comandos de execução, testes, limitações, evidência de deploy e um histórico de commits coerente.

| Prática recomendada | Como aplicar no G10 |
|---|---|
| Repositório isolado | Criar um novo repositório apenas para o agente documental do Challenge. |
| Template autoral | Reutilizar a estrutura de README e DEVLOG, mas preencher cada seção com fatos e arquivos do G10. |
| Autoria transparente | Incluir uma breve seção sobre governança humana e apoio de IA, sem transformar isso no foco da avaliação. |
| Evidência técnica | Versionar código, DEVLOG, testes, captura ou vídeo do agente e prova de deploy. |
| Segurança | Usar `.env.example` sem valores reais; nunca enviar chaves, dados do CRM, conversas ou documentos internos não autorizados. |
| Separação de produto | Citar o Hub, Link d’Água e CRM como contexto ou evolução futura; não conectar produção ao MVP sem nova aprovação. |

## Checklist antes da submissão

1. Confirme que o agente lê PDF ou CSV autorizado, recupera contexto e recusa quando a base não sustenta a resposta.
2. Revise o README para garantir que arquitetura, perguntas, respostas, instruções e limitações descrevem o estado real.
3. Faça uma auditoria de segredos, PII, licenças e links privados antes de tornar o repositório público.
4. Valide uma evidência real de deploy e registre como reproduzir o projeto.
5. Confira a versão mais recente das instruções na plataforma oficial; se houver dúvida sobre integridade acadêmica, envie uma pergunta objetiva ao suporte do G10 antes da entrega.

## Referências

[1] Challenge Alura Agente ONE G10 — conteúdo oficial: https://docs.google.com/document/d/1Eh7ISKpdG1XVnTv9zrm9QnygBrr9OPuB2YFn9tZlGFQ/edit?usp=drivesdk

[2] Transcrição da live do Challenge G10 — suporte complementar: https://docs.google.com/document/d/1HgcnP271GmuLS4H4fp_8kXCJBeJm4BOKoe5VdkMUcm4/edit?usp=drivesdk
