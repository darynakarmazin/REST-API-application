FROM node

WORKDIR /rest-api-application

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server"]