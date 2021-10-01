FROM node:14.15.4-alpine

WORKDIR /app

COPY ./server/package.json ./server/package-lock.json /app/

COPY ./server /app

RUN npm install

CMD ["npm", "start"]