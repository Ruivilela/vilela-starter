# Your Node version
FROM node:8.6.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm install

RUN npm run build

ENTRYPOINT npm start

EXPOSE 8080
