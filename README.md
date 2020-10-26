# PokePedia

## Projeto
Este projeto tem como objetivo, desenvolver uma aplicação que simula uma Pokédex da animação japonesa Pokémon.

## Estrutura de pastas
A estrutura de pastas do projeto segue a descrição abaixo:

`Interfaces` - Contém a abstração dos objetos utilizados na aplicação para comunicação com a API e aplicados aos componentes.

`Shared` - Contém um componente que pode ser compartilhado para notificações em qualquer parte da aplicação.
Pipes para padronização de algumas informações e serviços utilizados para conexão com a API e outra para comunicação entre dois componentes "distintos".

## Estrutura CSS
A pasta assets contém os arquivos em SASS/SCSS, basicamente o arquivo de colors.scss contém as principais cores utilizadas nos componentes assim como uma função geradora de cores com opacidade.
Além disso o arquivo main.scss contém a importação do arquivo colors.scss e uma estilização global para reset de algumas propriedades.

## Observações
A API não disponibiliza um endpoint onde possa ser utilizado filtro dinâmico (pesquisar partes de uma palavra chave), por tanto não foi possível implementar tal função.