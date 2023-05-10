FROM python:3.8.5-slim-buster

WORKDIR /app

RUN mkdir parser
RUN mkdir .circleci

COPY ./parser ./parser
COPY ./.circleci ./.circleci

RUN pip install --upgrade pip
RUN pip install pyyaml
