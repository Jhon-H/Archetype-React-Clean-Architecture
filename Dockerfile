FROM nginx:1.15.12-alpine

RUN apk add nginx-mod-http-headers-more

ENV TZ='America/Bogota'

COPY ./nginx  /etc/nginx
COPY ./build/ /usr/share/nginx/html

RUN addgroup -S executer && adduser -u 1000 -S executer -G executer \
 && mkdir -p /var/run/nginx /var/tmp/nginx \
 && chown -R executer:executer /usr/share/nginx /var/run/nginx /var/tmp/nginx /etc/nginx/ /var/lib/nginx/

# Copy shell script to container
COPY docker-entrypoint.sh /

# Make shell script executable
RUN chmod +x /docker-entrypoint.sh

USER executer:executer

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
