FROM nginx:1.19-alpine

COPY ./common/nginx/snippets /etc/nginx/snippets
COPY ./prod/nginx/conf.d /etc/nginx/conf.d

WORKDIR /app
