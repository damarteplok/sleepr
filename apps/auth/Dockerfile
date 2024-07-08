FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY pnpm-lock.yaml /usr/src/app/

RUN npm install -g @nestjs/cli
RUN npm install -g pnpm

RUN pnpm install

COPY . /usr/src/app/

RUN pnpm run build

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY pnpm-lock.yaml /usr/src/app/

RUN npm install -g @nestjs/cli
RUN npm install -g pnpm

RUN pnpm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/auth/main"]