FROM node:18-alpine3.18 as build
WORKDIR /app
# EXPOSE 8080
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install --force
COPY . .
RUN npm run build
# Servir o build estático com Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]