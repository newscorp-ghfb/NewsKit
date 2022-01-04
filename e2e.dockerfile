FROM cypress/base:10

WORKDIR /

ENV TZ=Europe/London

COPY ./package.json package.json
COPY ./yarn.lock yarn.lock

RUN yarn --ignore-scripts

COPY ./tsconfig.json ./
COPY ./tsconfig.common.json ./
COPY ./cypress.json ./
COPY ./webpack.e2e.config.js ./
COPY ./cypress ./
COPY ./e2e ./
COPY ./src ./

RUN yarn global add cypress@3.4.0