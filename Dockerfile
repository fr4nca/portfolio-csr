FROM node

WORKDIR /usr/src/app

ARG github_key=none
ENV REACT_APP_GITHUB_KEY=$github_key

COPY package*.json ./

RUN npm install

COPY . .

RUN cd client; yarn; yarn build

EXPOSE 5000

CMD ["yarn", "start"]
