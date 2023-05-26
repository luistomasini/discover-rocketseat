# Tipos de controle de versões

## Sistemas Locais

- Copiar os arquivos para outro diretório
- Muito comum e muito simples
- Incrivelmente propensa a erros
- Fácil de sobreescrever arquivos, caso haja uma cópia errada
**Para superar os possíveis erros, existe o RCS - Revision Control System**

Era muito popular antigamente, para o controle de versão.

Algumas das características são:

- Mantém o conjunto de alterações, ou seja, as diferenças entre os arquivos
- Possui formato especial no disco;
- Pode re-criar como qualquer arquivo se parecia em qualquer ponto do tempo, adicionando-se todas as alterações ao arquivo.

## Sistemas Centralizados

Exemplos: CVS, Subversion e Perforce.

- Um único servidor que contém todos os arquivos
- Vários clientes clientes usam arquivos a partir desse servidor central
*Por muitos anos, tem sido o padrão para o controle de versão.*

### Vantagens sobre VCSs locais

- Controle sobre a atividade dos colaboradores no projeto
- Os administradores têm controle refinado sobre quem pode fazer o que
- Muito mais fácil administrar um CVCS do que lidar com bancos de dados locais de cada cliente.
  
### Desvantagens

- Se esse servidor der problema durante uma hora, nessa hora ninguém será capaz de colaborar ou salvar as alterações de versão para o que quer que estejam trabalhando
- Também corremos o mesmo risco de perder tudo se um disco falhar, assim como no sistema local, já que toda vez que trabalhamos com todo o histórico em um só local, corremos o risco de perder tudo.

## Sistemas Distribuídos

Há também, o melhor dos dois mundos, os chamados sistemas distribuídos, alguns exemplos incluem Git, Mercurial, Bazaar e Daarcs

- Ele vai duplicar (clonar) localmente o repositório completo
- Se qualquer servidor morrer enquanto algum sistema estiver colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor
- Cada clone é um backup completo de todos os dados
- Clientes usam o estado mais recente dos arquivos.
