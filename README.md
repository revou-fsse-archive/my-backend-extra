<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>

# My Backend Extra

Simple REST API made with [NestJS](https://github.com/nestjs/nest) and Containerized with Docker.

- Live: https://hub.docker.com/r/mhaidarh/my-backend-extra
- Repo: https://github.com/revou-fsse/my-backend-extra

## Prepare Database

Make sure the database is ready before doing any dependency installation.

Edit `.env` file for the app:

```sh
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/db"
JWT_SECRET="abdefghijklmnopqrstuvwxyzabcdefghi"
```

Run Docker on your machine and run Docker Compose that specifically only run the database instance in the background:

```sh
docker compose -f docker-compose.dev.yaml up -d
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

## Build for Production with Container

Build the image and run the container with Docker Compose, that run both the web app and the database:

```sh
$ docker compose build
$ docker compose up
$ curl -i localhost:4000
$ docker-compose down
```

## Push the Image to Docker Hub

Login, tag, and push the image:

```
$ docker login
$ docker tag my-backend-extra mhaidarh/my-backend-extra
$ docker push mhaidarh/my-backend-extra
```

## Pull and Run the Container from Docker Hub

Check if it can be pulled and run:

```sh
$ docker pull mhaidarh/my-backend-extra
$ docker run -p 4000:4000 -d --name my-backend-extra-container mhaidarh/my-backend-extra
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

## References

- [NestJS + Redis + Postgres Local Development With Docker Compose](https://www.tomray.dev/nestjs-docker-compose-postgres)
- [AlexSKuznetsov/prisma-express](https://github.com/AlexSKuznetsov/prisma-express)
