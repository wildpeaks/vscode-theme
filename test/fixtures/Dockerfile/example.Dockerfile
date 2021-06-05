FROM node:lts-alpine
LABEL Name=myimage Version=1.0.0

# This is a comment

RUN npm install -g example@1.2.3
EXPOSE 80 443
CMD ["my-command", "--param1", "--param2"]
