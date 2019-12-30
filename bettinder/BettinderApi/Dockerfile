FROM node:10

WORKDIR /usr/src/bettinder

COPY . .
RUN npm install && npm run build

EXPOSE 3000
CMD [ "node", "dist/server.js" ]