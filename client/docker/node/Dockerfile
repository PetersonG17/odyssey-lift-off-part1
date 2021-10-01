FROM node:14.15.4-alpine

WORKDIR /app

COPY ./client/package.json ./client/package-lock.json /app/

COPY ./client /app

RUN npm install

CMD ["npm", "start"]