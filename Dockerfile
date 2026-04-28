FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci
# RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index" ]