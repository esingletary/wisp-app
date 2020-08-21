FROM nginx:alpine

COPY tools/nginx-config.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
