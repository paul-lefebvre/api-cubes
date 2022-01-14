#FROM postgres:14.1-alpine
#COPY ./.docker/db/cubes.sql /docker-entrypoint-initdb.d/

FROM node:12.22.7
# CREATE WORKING FOLDER
RUN mkdir -p /app
WORKDIR /app

# COPY ALL FOLDERS/FILES NEEDED TO RUN APPLICATION
COPY app.js ./
COPY package.json tsconfig.json swagger.json .eslintrc.js babel.config.js vue.config.js ./
COPY src ./src
COPY public ./public
COPY bin ./bin
COPY .env ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm install --loglevel=error

# FOR EXPOSE PORT TO REFLECT 3000 (IMAGE API)
EXPOSE 3000

# WHEN WE'LL NEED TO START SH BEFORE NPM START
CMD /wait && npm start