# Dockerizing Node: Dockerfile for building an API image

FROM node

# Create api directory
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# Install app dependencies
COPY package.json /usr/src/api/
RUN npm install

# Bundle app source
COPY . /usr/src/api

EXPOSE  8888
CMD [ "npm", "start" ]
