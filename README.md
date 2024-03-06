Documentação do Projeto ProdLink
Este projeto é uma API de cadastro de clientes e produtos utilizando NestJS, Prisma e MySQL. Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

Pré-requisitos
Node.js (versão 20.9.0 ou superior)
Gerenciador de pacotes (pnpm versão 8.15.4)
MySQL Server e MySQL Workbench
Configuração do Ambiente
1. Instalação do Node.js
Se ainda não possui o Node.js instalado, faça o download e a instalação a partir do site oficial do Node.js.

2. Instalação do Gerenciador de Pacotes
Este projeto utiliza pnpm como gerenciador de pacotes. Para instalá-lo globalmente, execute:

npm install -g pnpm
3. Instalação do MySQL Server e MySQL Workbench
Baixe o MySQL Installer do site oficial do MySQL, que inclui o MySQL Server e o MySQL Workbench. Siga as instruções de instalação e crie uma conexão chamada ProdLink com uma senha de sua escolha.

Configuração do Projeto
1. Clone o Repositório
Clone o repositório do projeto para o seu ambiente local usando o comando:

git clone <url-do-repositorio>
Substitua <url-do-repositorio> pela URL do repositório do GitHub.

2. Instale as Dependências
Navegue até a pasta do projeto clonado e execute o seguinte comando para instalar todas as dependências necessárias:

pnpm install
3. Configure a Conexão com o Banco de Dados
Crie um arquivo .env na raiz do projeto com as seguintes variáveis para configurar a conexão com o seu banco de dados MySQL:

DATABASE_URL="mysql://root:<SUA_SENHA>@localhost:3306/ProdLink"
Substitua <SUA_SENHA> pela senha que você definiu durante a instalação do MySQL Server.

4. Gere o Cliente Prisma
Gere o cliente Prisma para garantir que os tipos e métodos do Prisma estejam disponíveis para o projeto:


npx prisma generate
5. Execute as Migrações do Prisma
Para criar as tabelas necessárias no seu banco de dados, execute:

npx prisma migrate dev
Este comando irá aplicar as migrações necessárias ao banco de dados configurado no .env.

Executando o Projeto
Após configurar o projeto, você está pronto para executá-lo. Rode o seguinte comando:

sh
Copy code
pnpm start:dev
Isso iniciará o servidor de desenvolvimento. Você pode acessar a API através de http://localhost:3000.

Documentação da API com Swagger
A documentação interativa da API está disponível através do Swagger. Acesse http://localhost:3000/api no seu navegador para visualizá-la.
