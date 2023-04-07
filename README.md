<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>

# Median API

Simple API example made with [NestJS](https://github.com/nestjs/nest) framework using its TypeScript starter repository.

## Installation

Install the recommended runner for npm/yarn/pnpm:

```sh
$ pnpm add -g @antfu/ni
```

Install dependencies:

```sh
$ ni
```

Check available scripts/commands:

```sh
$ nr
```

## Preparing the database

Run Docker and run Docker Compose to run the PostgreSQL instance:

```sh
docker-compose up -d
```

Edit `.env` file:

```sh
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"
```

Check the Prisma setup:

```sh
nr prisma:format
nr prisma:validate
nr prisma:generate
nr prisma:push
nr prisma:studio
nr prisma:seed
```

## Running the app

```sh
# development with watch mode
$ nr dev

# development
$ nr start

# production mode
$ nr start:prod
```

## Test

```sh
# unit tests
$ nr test

# e2e tests
$ nr test:e2e

# test coverage
$ nr test:cov
```

## Docs

(TODO)

## Support

NestJS is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

[MIT](LICENSE).
