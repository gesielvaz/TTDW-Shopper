# Use a imagem base do Node.js
FROM node:20

# Crie um diretório para o aplicativo
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que o aplicativo usará
EXPOSE 8081

# Comando para iniciar o aplicativo
CMD ["npm", "run", "dev"]
