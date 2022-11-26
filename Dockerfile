FROM node:14-alpine3.12

WORKDIR /usr/src/app/server

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]
