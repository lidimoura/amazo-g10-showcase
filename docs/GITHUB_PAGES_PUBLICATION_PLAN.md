# Plano de publicação — GitHub Pages

## Objetivo

Criar um repositório público independente para o showcase visual do Challenge G10, com o nome proposto **`lidimoura/amazo-g10-showcase`** e URL esperada `https://lidimoura.github.io/amazo-g10-showcase/`. A disponibilidade do nome foi verificada em 2026-08-22; a URL não deve ser tratada como ativa antes da criação e da publicação efetivas.

## Separação de escopo

| Repositório | Conteúdo | Papel público |
|---|---|---|
| `amazo-g10-showcase` | Landing page, imagens aprovadas, documentação de design e links de contexto. | Portfólio e demonstração visual. |
| `amazo-guia-g10` | Código do MVP RAG, fontes autorizadas, testes e evidências acadêmicas. | Entrega técnica do Challenge. |
| `amazo.ia-showcase` | Versão histórica Typebot. | Origem visual e conversacional. |

## Publicação estática

O script `scripts/export-github-pages.mjs` prepara uma cópia portátil em diretório externo, adicionando os seis ativos aprovados a `client/public/assets`. O build de Pages usa `VITE_PUBLIC_EXPORT=true` e `GITHUB_PAGES=true`; assim, a LP aponta para arquivos locais do repositório publicado em vez de depender de URLs internas de armazenamento gerenciado.

A publicação usa uma branch `gh-pages` contendo somente o conteúdo de `dist/public`. Após o primeiro push, a configuração do GitHub Pages deve apontar para a branch `gh-pages` na raiz (`/`). Nenhum segredo é necessário para esse fluxo.

## Referência cruzada planejada no repositório técnico

Após a URL do Pages ser confirmada, inserir no README de `amazo-guia-g10` uma seção curta e factual:

> **Showcase visual:** a LP pública do Challenge apresenta arquitetura, método, trajetória e evidências em curadoria. Ela não substitui o código, as fontes, os testes e a documentação técnica deste repositório. Link: `https://lidimoura.github.io/amazo-g10-showcase/`.

## Checklist de segurança antes da publicação

- Revisar o conteúdo versionado contra segredos, PII, dados de cliente e links privados.
- Confirmar autorização para tornar públicos a fotografia e os seis ativos visuais aprovados.
- Confirmar criação pública do repositório, primeiro push e ativação do GitHub Pages.
- Testar a URL final, navegação interna, imagens, links externos e responsividade após o deploy.
