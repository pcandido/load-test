FROM node:slim

WORKDIR /api
EXPOSE 8080

COPY package*.json .
RUN npm ci
COPY src src

CMD [ "npm", "start" ]