FROM node:10.13-alpine

ENV NODE_ENV development

WORKDIR /app

COPY package*.json /app

#test
RUN npm install


EXPOSE 3008

COPY . /app
# Building production app
# RUN npm run build

# Running the app on dev
CMD [ "npm","run","dev" ]
# CMD [ "npm", "start" ]