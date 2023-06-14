# Configuração de branch padrão e proteção de main

## Configuração Padrão de uma Branch:
- Ao criar uma nova branch em um repositório, por padrão ela não possui proteções especiais.
- É possível fazer commits, push e pull na branch sem restrições adicionais.
- Essa configuração é adequada para branches de desenvolvimento ou experimentação, onde a colaboração e as alterações são frequentes.

## Proteção da Branch "main":
- A branch "main" é a branch principal de um repositório que geralmente contém o código estável e pronto para implantação.
- É recomendável aplicar proteções extras à branch "main" para garantir a integridade do código e evitar alterações não autorizadas.
- As proteções podem incluir restrições para impedir a exclusão direta da branch, requerer revisões de código (code reviews) ou impedir push direto para a branch "main".
- Essas proteções ajudam a manter a estabilidade do código principal e a garantir que as alterações sigam um fluxo de revisão adequado.

Passo a passo e elementos mais importantes no Github:
1. Settings
2. Branches
3. Branch Protection Rules > Add branch protection rule
4. Branch name pattern (nome-da-branch)
5. Requrie a pull request before merging (Só será feito o merge quando existir o pull request)
    5.1 Require approvals (Define quantas aprovações são necessárias)
6. Require status checks to pass before merging (ferramenta do Github que faz análises no código para verificação de erros)
7. Require conversation resolution before merging (Condiciona a aprovação do pull request mediante discussão em comentários)
8. Include Administrators (Adminsitradores podem fazer o merge sem a necessidade das aprovações requeridas)
9. Allow push force (Push forçado mesmo com conflitos)
10. Allow deletions (Permitir apagar as branchs depois do merge)
