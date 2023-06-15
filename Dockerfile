FROM node:18-alpine

COPY . /techcrunch_blog/

WORKDIR /techcrunch_blog

RUN npm install

CMD ["npm", "start"]
