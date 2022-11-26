FROM node:14-alpine3.12

WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 8000

CMD [ "npm", "run", "start"]
