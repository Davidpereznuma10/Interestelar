# Utiliza una imagen base de Node.js
FROM node

# Crea un directorio para la aplicación en el contenedor
RUN mkdir -p /usr/src/app

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo del contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el proyecto al directorio de trabajo del contenedor
COPY . .

# Expone el puerto 3000 (ajusta según tus necesidades)
EXPOSE 3000

# Comando para iniciar la aplicación (ajusta según tus necesidades)
CMD [ "npm", "run", "dev" ]

