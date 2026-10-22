# Política de Segurança

## Escopo

Este repositório contém a landing page da Ovni Rent a Car, publicada em
https://actioncsd.github.io/Ovini/ via GitHub Actions + GitHub Pages.

## Quem pode alterar o código

- Somente colaboradores autorizados da organização `actioncsd` têm permissão de escrita.
- A branch `master` é protegida: force push e exclusão são bloqueados.
- Contribuições externas só entram via Pull Request, revisadas por um responsável
  listado em `.github/CODEOWNERS`.
- Workflows disparados por Pull Requests de colaboradores externos só rodam após
  aprovação manual de alguém com permissão de escrita.

## GitHub Actions

- O `GITHUB_TOKEN` tem permissão padrão somente de leitura.
- Apenas actions criadas pelo GitHub (`actions/*`) podem ser executadas.
- O deploy só é disparado por push na `master` ou manualmente (`workflow_dispatch`);
  nenhum workflow roda com `pull_request_target`.
- Nunca adicione segredos (tokens, senhas, chaves) ao código ou aos workflows.

## Reportando uma vulnerabilidade

Não abra uma issue pública. Use o formulário privado em
**Security → Report a vulnerability** neste repositório.

Responderemos assim que possível e manteremos o reporte confidencial até a correção.
