# Git Workflow

## Descrição

Nessa aula falaremos sobre como funciona o workflow do git, que vimos na aula passada, onde criamos o primeiro arquivo, passamos pela stage area, e adicionamos ao repositório.

1. Primeiramente suponhamos que temos um arquivo, e nós o preparamos através do git add. Isso significa que ele teve uma cópia de si feita, e essa cópia foi enviada para a nossa stage area, então temos dois arquivos, onde podemos trabalhar em nosso working directory, enquanto nossa versão no stage area continua a mesma, podendo ter duas versões diferentes do nosso arquivo.

2. Podemos então colocar ele no nosso repositório local, através do comando git commit, onde criamos um ponto na história, onde temos nosso arquivo naquele momento do tempo.

3. Agora faremos uma alteração nesse arquivo, e teremos então o arquivo (v2), e faremos o mesmo processo para ele, passando para o stage area, e iniciando um commit, então no nosso repositório teremos a v1 e a v2, a v2 ficando por último, visto que é uma linha do tempo, então podemos criar a v3 e fazer o mesmo processo, criar a v4 e repetir, e nós teremos todas as versões do nosso arquivo salvas dentro do nosso repositório.

Podemos voltar atrás em todas as versões dos arquivos, porém a numeração não será bonitinha, teremos que usar a hash, sobre a qual falaremos na próxima aula.
