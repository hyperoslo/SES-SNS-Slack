# SES SNS Slack

Serverless app sending notifications about bounces and complaints from AWS SES to Slack using SNS Topic

## Setup

```bash
npm install serverless --global
npm install
```

## Configure ENV and Serverless variables

```
cp .envrc-sample .envrc
cp serverless.env.yml-sample serverless.env.yml

direnv edit
direnv allow
```

## Deploy

```bash
serverless deploy
```
