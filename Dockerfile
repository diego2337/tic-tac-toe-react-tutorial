FROM node:14
WORKDIR /code
ENV PATH /code/node_modules/.bin:$PATH
COPY package.json /code/package.json
RUN npm install