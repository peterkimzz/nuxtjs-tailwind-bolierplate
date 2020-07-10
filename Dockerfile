FROM node:14-slim

WORKDIR /usr/src/www

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --silent

COPY . .

RUN yarn build

ENV HOST 0.0.0.0

EXPOSE 3001