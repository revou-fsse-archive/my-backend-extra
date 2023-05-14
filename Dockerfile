# To build for local development
FROM node:alpine AS development
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm fetch --prod
RUN pnpm install --prod -r --offline
COPY . ./
USER node

# To build for production
FROM node:alpine AS build
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
COPY --from=development /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm
RUN pnpm build
ENV NODE_ENV production
RUN pnpm install --prod
USER node

# To run for production
FROM node:alpine As production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
EXPOSE 4000
RUN npm install -g pnpm
CMD ["pnpm", "start:prod"]

