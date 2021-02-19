FROM node:12.20.1
WORKDIR /app
COPY . . 
RUN npm install -g @angular/cli
RUN npm install
RUN npm install --save @angular/http
EXPOSE 4200
CMD ng serve --host 0.0.0.0