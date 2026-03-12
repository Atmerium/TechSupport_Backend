FROM node:lts-alpine3.17

COPY . .

RUN npm run start:dev