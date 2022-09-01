FROM node:lts-alpine

# http serveur simple
RUN npm install -g http-server

# param. le dossier racine 
WORKDIR /app

# recopie les package et package.lock json si ils existent
COPY package*.json ./

# install les packages 
RUN npm install

# recopie tout sur le dossier
COPY . .

# construis l'application lançable 
RUN npm run build

#port de lapp

EXPOSE 8080
CMD [ "http-server", "dist" ]