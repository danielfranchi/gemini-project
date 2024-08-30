# Usar a imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todo o código fonte para o diretório de trabalho
COPY . .

# Compilar o código TypeScript
RUN npm run build

# Expor a porta que o servidor vai utilizar
EXPOSE 3000

# Definir o comando para iniciar a aplicação
CMD ["npm", "start"]
