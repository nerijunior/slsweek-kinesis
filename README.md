# Serverless Week Exemplo

Esse exemplo foi utilizando durante uma talk minha para o [Serverless Week 2019](https://slsweek.netlify.com/) falando como nós processamos mais de 1.5 milhões de notificações no EBANX Track.

## Instalação

Você precisa do [serverless framework](https://serverless.com/) instalado globalmente na sua máquina para rodar as coisas:

NPM: `npm install -g serverless`

YARN: `yarn global add serverless`

Aí é só baixar e instalar as dependências.

```
git clone git@github.com:nerijunior/slsweek-kinesis.git
cd slsweek-kinesis
```

NPM `npm install`
YARN: `yarn`

## Deploy

```
sls deploy
```