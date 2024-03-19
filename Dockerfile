FROM node:iron-alpine3.19
WORKDIR /home/node/app
COPY package*.json index.js ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "serve"]