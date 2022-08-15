FROM node:16.13.1

WORKDIR /app

RUN npm install -g @nestjs/cli

COPY package.json yarn.lock ./

RUN yarn

COPY . .

ENV PORT=8000

