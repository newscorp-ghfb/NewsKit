FROM python:3.8.5-slim-buster

WORKDIR /app

RUN mkdir .circleci

COPY ./.circleci ./.circleci

RUN pip install --upgrade pip
RUN pip install pyyaml
