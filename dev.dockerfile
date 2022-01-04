FROM circleci/node:10.16

WORKDIR /app

RUN sudo chown circleci:circleci /app

COPY Makefile ./
COPY tsconfig* ./
COPY yarn.lock ./
COPY package.json ./

RUN make install

COPY docs ./docs
COPY src ./src
COPY site ./site
COPY .storybook ./.storybook

EXPOSE 6006 8081
