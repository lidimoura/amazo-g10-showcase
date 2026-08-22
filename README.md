# Amazô G10 — Showcase

Landing page editorial do **Challenge G10** para apresentar a Amazô como proposta de agente documental com RAG, rastreabilidade, limites e evidências de desenvolvimento. Este repositório contém exclusivamente o showcase visual e sua documentação de produto; o código do MVP acadêmico do agente permanece separado em [`lidimoura/amazo-guia-g10`](https://github.com/lidimoura/amazo-guia-g10).

> **Estado de publicação:** preparado para GitHub Pages, mas ainda não publicado. A criação do repositório, o push e a ativação do Pages dependem de aprovação explícita da Lídi Moura.

## Propósito e escopo

O showcase torna visíveis o problema, a arquitetura proposta, as evidências previstas, a autoria humana e o método Hub OS. Não contém a base documental privada, dados de clientes, credenciais, integração ativa com CRM/Supabase ou lógica operacional do agente.

| Repositório ou canal | Papel |
|---|---|
| [Amazô.guia — Challenge G10](https://github.com/lidimoura/amazo-guia-g10) | MVP técnico do agente documental e suas evidências. |
| [Showcase Amazô.IA Typebot](https://lidimoura.github.io/amazo.ia-showcase/) | Origem pública da Amazô como recepção e SDR digital. |
| [Código do showcase Typebot](https://github.com/lidimoura/amazo.ia-showcase) | Registro histórico visual e conversacional, separado do RAG. |
| [LinkedIn de Lídi Moura](https://www.linkedin.com/in/lidimoura/) | Trajetória profissional em dados, IA e automação. |
| [Portfólio Link d’Água](https://link.encontrodagua.com/r/portifolio-lidimoura) | Projetos, formação e ofertas profissionais. |

O **Hub OS** é citado como método de organização, QA e documentação. Seu repositório oficial é [`lidimoura/Hub_OS`](https://github.com/lidimoura/Hub_OS) e possui acesso restrito; por isso, não é exposto como link público funcional neste showcase.

## Executar localmente

```bash
pnpm install
pnpm dev
```

Para validar a aplicação:

```bash
pnpm check
pnpm build
```

## Preparar uma versão portátil para GitHub Pages

O ambiente de desenvolvimento usa URLs de armazenamento gerenciado. Para tornar a publicação independente, exporte uma cópia estática com os ativos visuais aprovados:

```bash
pnpm export:pages -- /caminho/para/amazo-g10-showcase
cd /caminho/para/amazo-g10-showcase
pnpm install
pnpm build:pages
```

A exportação copia somente os ativos listados no script e não inclui `.env`, logs, segredos, banco de dados ou arquivos de configuração locais. A publicação prevista envia `dist/public` para a branch `gh-pages`, configurada como fonte do GitHub Pages após o repositório público estar criado.

## Créditos e transparência

A fotografia da samambaia é de autoria de **Lídi Moura**, registrada no Amazonas, Brasil. As ilustrações digitais da Amazô foram dirigidas e aprovadas por Lídi Moura para este projeto. O uso de IA-Native representa um método de pesquisa, prototipação e QA sob autoria e validação humana.

Para decisões, ativos, limitações e próximos incrementos, consulte [`docs/`](./docs/).
