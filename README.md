## Cashforce - Teste técnico

## Sobre
Aplicação desenvolvida durante o teste técnico da empresa Cashforce.
- Banco de dados MySQL;
- Back-end em NodeJS com Express e Sequelize;
- Front-end em React com CSS Modules;

A aplicação vai rodar nas portas 3000(front-end), 3001(back-end) e 3002(banco de dados). Portanto, antes da execução, elas devem estar disponíveis na sua máquina local.

## Front-end
![cashforce](https://user-images.githubusercontent.com/92269952/210022184-00f661ff-8b95-47de-bb8e-b88a267f193a.gif)

## Como Rodar Localmente
- ``git clone git@github.com:erik-ymmt/cashforce-teste.git``
- ``cd cashforce-teste``
- ``docker-compose up``
- A aplicação não irá funcionar sem o banco rodando, portanto, aguarde o container db subir e:
- Execute o SQL para criar o banco de dados da maneira que desejar (por ex.: MySQL Workbench). Criar o Schema com o nome 'cashforce'
``CREATE SCHEMA cashforce;
USE cashforce;``
- Reinicie o container do back-end ``docker-compose restart backend``
- Pronto! Acesee o front-end em ``http://localhost:3000/``
