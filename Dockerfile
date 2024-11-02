FROM node:18-alphie

WORKDIR /app

RUN apk update && \
    apk add --no-cache gcc musl-dev libffi-dev

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
