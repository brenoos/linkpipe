FROM node:10.15

WORKDIR /home/app

COPY . ./

COPY package.json yarn.lock ./

RUN yarn && yarn cache clean

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main.js"]