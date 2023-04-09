<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>

# Median API

Simple API example made with [NestJS](https://github.com/nestjs/nest) framework using its TypeScript starter repository.

## Prepare database

Make sure the database is ready before doing any dependency installation.

Run Docker and run Docker Compose to run the PostgreSQL instance:

```sh
docker-compose up -d
```

Edit `.env` file:

```sh
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"
```

## Install dependencies

Install the recommended agent runner:

```sh
$ pnpm add -g @antfu/ni
```

This allow to automatically detect if we're using either npm/yarn/pnpm.

Install global CLI:

```sh
$ ni -g @nestjs/cli  # npm i -g
$ ni -g prettier
$ ni -g eslint
```

Install local dependencies:

```sh
$ ni  # npm install
```

Check available scripts/commands:

```sh
$ nr  # npm run
```

## Run for Development

Run the NestJS server:

```sh
# with watch
$ nr dev

# without watch
$ nr start
```

Check the Prisma commands accordingly:

```sh
nr prisma:format
nr prisma:validate
nr prisma:generate
nr prisma:push
nr prisma:studio
nr prisma:seed
```

## Build for Production

```sh
$ nr build
$ nr start:prod
```

## Test for Assurance

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
