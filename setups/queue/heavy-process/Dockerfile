FROM node:slim

WORKDIR /process

COPY package*.json .
RUN npm ci
COPY src src

CMD [ "npm", "start" ]