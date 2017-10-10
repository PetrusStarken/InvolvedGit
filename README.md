# Involved Git

Teste de seleção para a Involves Florianópolis.

## [O desafio](https://involved-git.firebaseapp.com/challenge)

Construir uma aplicação para consulta de perfis do GitHub.

Principais requisitos:
 - ~Permitir a pesquis de usuários por nome e exibir o resultado da pesquisa na mesma página~
 - Permitir que sejam feitas anotações sobre o usuário
 - ~Mostrar os repositórios do usuário de maneira páginada~
 - ~Mostrar página 404 quando o usuário não existir~
 
Pontos extras:
 - Testes unitários
 - Implementar autenticação utilizando OAuth 

## [A solução](https://involved-git.firebaseapp.com/solution)

Aplicação SPA construida com AngularJs

### O que foi implementado

 - Busca em tempo real de usuários por nome e/ou login
 - Card de usuário na busca com os seguintes dados
   - Avatar
   - Nome completo (caso possua)
   - Nome de usuário
   - Total de repositórios e forks
   - Link para visualizar o perfil no github
 - Listagem paginada com todos os usuários encontrados
 - Página com a listagem paginada com todos os repositórios do usuário
 - Card de repositórios com as seguintes informações
   - Nome do repositório
   - Descrição (caso haja)
   - Principal tecnologia utilizada
   - Total de forks e stars
   - Link para visualizar o repositório no GitHub
   
### O que ainda falta implementar

 - Armazenar comentários para usuários
 - Escrever testes de unidade
 - ~Implementar autenticação utilizando OAuth~
   - Autenticação implementada no branch [oAuth](https://github.com/PetrusStarken/InvolvedGit/tree/oAuth) mas não funcional

### Tecnologias utilizadas

 - [Yeoman FountainJs][1] [Angular 1 Generator][2] - gerador de scaffolding
 - [SASS][3] - pré processador de CSS
 - [Bower][4] - gerenciador de pacotes
 - [Gulp][5] - automatizador de tarefas
 - [Jasmine][6] - framework para testes de unidade
 - [Karma][7] - executor de testes
 - [AngularJs][8] - framework Javascript
 - [MaterializeCss][9] - framework CSS
 - [Firebase][10] - infraestrutura de serviços
 - [GitHub Api V3][11] - api restful do GitHub
 
 [1]:https://github.com/FountainJS
 [2]:https://github.com/FountainJS/generator-fountain-angular1
 [3]:http://sass-lang.com/
 [4]:https://bower.io/
 [5]:https://gulpjs.com/
 [6]:https://jasmine.github.io/
 [7]:https://karma-runner.github.io
 [8]:https://angularjs.org/
 [9]:http://materializecss.com/
 [10]:https://firebase.google.com/
 [11]:https://developer.github.com/v3/
 
## Rodando a aplicação

Instale as dependências do projeto utilizando o comando

```
npm install
bower install
```

#### Utilizando os comando do NPM

- `npm build` compilar o projeto na pasta dist
- `npm serve` executar o projeto utilizando browser sync
- `npm serve:dist` executar o projeto utilizando a versão de código otimizada na pasta dist
- `npm test` executar os testes de unidade utilizando o Karma
- `npm test:auto` executar os testes de unidade de maneira assistida


#### Ou utilizando os comandos do Gulp

É necessário instalar o [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) globalmente `npm install -g gulp-cli`

- `gulp` or `gulp build`
- `gulp serve`
- `gulp serve:dist`
- `gulp test`
- `gulp test:auto`

**Se você não tiver o gulp-cli instalado terá o seguinte erro:**
> /usr/local/lib/node_modules/gulp/bin/gulp.js:121
    gulpInst.start.apply(gulpInst, toRun);
TypeError: Cannot read property 'apply' of undefined
