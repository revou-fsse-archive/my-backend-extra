<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>

# My API Infra

Simple REST API made with [NestJS](https://github.com/nestjs/nest) framework using its TypeScript starter repository. And deployed with [Google Cloud Platform](https://cloud.google.com).

- Live: https://api-infra.mhaidarhanif.com
- Repo: https://github.com/revou-fsse/my-api-infra

## Prepare Database

Make sure the database is ready before doing any dependency installation.

Run Docker on your machine and run Docker Compose to run the PostgreSQL instance in the background:

```sh
docker-compose up -d
```

Edit `.env` file for the app:

```sh
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/db"
JWT_SECRET="abdefghijklmnopqrstuvwxyzabcdefghi"
```

## Setup Package Manager

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

## Install Dependencies

Install local dependencies:

```sh
$ ni  # npm install
```

Check available scripts/commands:

```sh
$ nr  # npm run
```

## Run for Development

Push schema to the database or generate Prisma schema while in development:

```sh
prisma:push      # prisma db push
prisma:generate  # prisma generate
```

Run the NestJS server:

```sh
# with watch
$ nr dev

# without watch
$ nr start
```

Then open <http://localhost:4000> on your browser.

## API Documentation with Swagger

After running the server on local, open <http://localhost:4000/docs> on your browser. Or if already deployed, check the `/docs` route.

## Database Operation on Development

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

## License

[MIT](LICENSE).
