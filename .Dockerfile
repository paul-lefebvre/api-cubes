FROM node:12.22.7

# CREATE WORKING FOLDER
RUN mkdir -p /usr/app
WORKDIR /usr/app

# COPY ALL FOLDERS/FILES NEEDED TO RUN APPLICATION
COPY app.js ./
COPY package.json tsconfig.json tslint.json swagger.json ./
COPY src ./src
COPY public ./public
COPY bin ./bin

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm install 

# FOR EXPOSE PORT 3000 (PORT OF CUBES API)
EXPOSE 3000

# WHEN WE'LL NEED TO START SH BEFORE NPM START
CMD /wait && npm start