# build environment
FROM node:12.18.1 as builder
# app is the dir inside container which contains source code
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# copy required dependencies
COPY package.json yarn.lock ./
# this separates the dependency installation from the edits to our actual source files. 
# This allows Docker to cache these steps so that subsequent builds — one’s in which we
# only edit source files and don’t install any new dependencies — will be faster. 
RUN yarn install
COPY . ./
RUN yarn build

# production environment
FROM nginx:stable-alpine
RUN apk add --no-cache bash
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./nginx.config /etc/nginx/nginx.conf 
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
#EXPOSE 3000 8080
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'