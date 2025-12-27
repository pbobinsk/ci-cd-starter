FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Odsłaniamy port 3000
EXPOSE 3000
# Uruchamiamy serwer
CMD ["npm", "start"]