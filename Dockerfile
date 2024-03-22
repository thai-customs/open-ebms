FROM node:iron-alpine3.19
WORKDIR /home/node/app
COPY . ./
RUN npm install
EXPOSE 3080
CMD [ "npm", "run", "serve"]