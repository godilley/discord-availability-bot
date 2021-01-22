FROM node:15-alpine
COPY ./app /usr/src/app

WORKDIR /usr/src/app

ENV NODE_ENV=production

RUN npm install -g nodemon
RUN npm install --production

ENTRYPOINT ["nodemon", "/usr/src/app/index.js"]

