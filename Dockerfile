FROM node:20-alpine 

RUN yarn global add http-server

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080
CMD [ "http-server", "--gzip" , "dist" ]
