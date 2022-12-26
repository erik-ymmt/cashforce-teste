FROM node:16.14-alpine
WORKDIR /frontend
COPY package* ./
RUN apk --no-cache add curl
RUN ["npm", "install"]
COPY . .
EXPOSE 5173
ENTRYPOINT ["npm"]
CMD ["start"]