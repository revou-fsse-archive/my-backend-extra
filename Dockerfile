FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm fetch --prod
ADD . ./
RUN pnpm install -r --offline --prod

RUN pnpm build

COPY . ./

EXPOSE 4000

CMD ["./start.sh"]
