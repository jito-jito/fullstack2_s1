# ----------------------------
# Etapa 1: Build (Compilación)
# ----------------------------
FROM node:20-alpine as build-stage

WORKDIR /app

# Copiamos primero package.json para aprovechar la caché de Docker
COPY package*.json ./

# Instalamos dependencias (npm ci es más rápido y limpio para CI/CD)
RUN npm ci

# Copiamos el código fuente
COPY . .

# Compilamos la aplicación para producción
RUN npm run build -- --configuration production

# ----------------------------
# Etapa 2: Producción (Nginx)
# ----------------------------
FROM nginx:alpine as production-stage

# Copiamos la configuración personalizada de Nginx creada en el paso 1
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos compilados de Angular desde la etapa anterior
# IMPORTANTE: Reemplaza "tu-nombre-proyecto" por el nombre real que está en angular.json o la carpeta dist/
COPY --from=build-stage /app/dist/games-app/browser /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]