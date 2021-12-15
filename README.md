# CUBES API

## Introduction

### Versionning

node : 12.22.7
Docker : 3.8

## Liens

- URL du back-office : http://localhost:3000

- Documentation Express : https://expressjs.com/fr/
- Documentation de l'API : http://localhost:3000/doc

## Installation

Vous devez créer un fichier `.env` à la racine du projet et y copier le contenu suivant, sans oublier d'adapter les
valeurs selon votre environnement.

```dotenv
APP_NAME=api-cubes
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_PORT=3000
APP_URL=http://apicubes.local

# Postgres Database
DB_CONNECTION=postgres
DB_PORT=5432
DB_DATABASE=cubes_db
DB_USER=admin
DB_PASSWORD=test123

#Pg Admin
PGA_MAIL=
PGA_PASSWORD=
PGA_PORT=8080
PGA_LISTEN_PORT=80
```

### Commandes d'Installation et Prise en Main (sous Linux)

```shell
# Récupérer le projet depuis github
git clone git@github.com:paul-lefebvre/api-cubes.git .

# Installe et build les containers du projet
sudo docker-compose up --build -d

# Démarre le docker (-d = pour se détacher)
sudo docker-compose up [-d]

# Stop le docker
sudo docker-compose stop

# Information sur les containers
sudo docker ps

# Kill un container
sudo docker-compose kill {CONTAINER_ID}

# Log un container
sudo docker logs {CONTAINER_ID}
```

### Base de données

Vous devez tout d'abord configurer le type de connexion à votre base de données, ainsi que les identifiants dans le
fichier `.env`.

## Liens Pratiques

#### PgAdmin

http://localhost:8080

#### Back Office

http://localhost:3000

#### ENDPOINT de l'api

http://localhost:3000/api/

#### Documentation de l'API

http://localhost:3000/doc

## Commandes Utiles

```shell
# Teste son code pour la vérification TSLint
npm build

# Démarre le serveur Express sous nodemon
npm start
```

## Informations Diverses

Utilisation de PgAdmin 4 (SGBDR pour PostgreSQL)
