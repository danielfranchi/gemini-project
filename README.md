# Back-End de Leitura de Imagens
### Back-End para Leitura de Imagens no API do Google Gemini.

<br />

## 🛠 Back-End

### :white_check_mark: Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

[![Git](https://img.shields.io/badge/Git-Link-2bce3a?style=for-the-badge&logo=git)](https://git-scm.com/)&nbsp;[![Node.js](https://img.shields.io/badge/Node.js-Link-2bce3a?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)&nbsp;[![Docker](https://img.shields.io/badge/Docker-Link-2bce3a?style=for-the-badge&logo=docker)](https://www.docker.com/) [![VSCode](https://img.shields.io/badge/VSCode-Link-2bce3a?style=for-the-badge&logo=visual-studio-code)](https://code.visualstudio.com/) [![Postman](https://img.shields.io/badge/Postman-Link-2bce3a?style=for-the-badge&logo=postman)](https://www.postman.com/downloads/)&nbsp;

<br />

### :white_check_mark: Configuração

```bash
# Instalar o Docker Desktop
$ https://www.docker.com/products/docker-desktop

# Instalar o Docker Compose
$ https://docs.docker.com/compose/install/

# Clonar o repositório
$ git clone https://github.com/danielfranchi/gemini-project

# Acesse a pasta do projeto no terminal com o comando cd
$ cd gemini-project

# Instalar dependências
$ npm install

# Construir a imagem e iniciar o contêiner
$ docker-compose up --build

# Verifique se o contêiner está rodando corretamente
$ docker ps

# Para parar o projeto e remover o contêiner
$ docker-compose down
```
<br />

### :white_check_mark: Testar Back-End

Depois de iniciar o contêiner Docker, você pode testar a API usando o Postman. Aqui estão os detalhes dos endpoints disponíveis e exemplos de como fazer as requisições:

### Endpoint: POST /upload
Recebe uma imagem em URL, consulta a API do Google Gemini e retorna a medida lida pela API.

```bash
# Abra o Postman
$ Inicie o aplicativo Postman em sua máquina.

# Crie uma nova requisição**  
$ Clique em "New" no canto superior esquerdo e selecione "Request" para criar uma nova requisição.

#  Configure a URL e o Método da Requisição
$ URL: `http://localhost:3000/api/upload`  
$ Method: POST

# Defina os Headers da Requisição
$ Headers: Content-Type: application/json

# Insira o Corpo da Requisição**
$ Clique na aba "Body" abaixo da barra de endereço.
$ Selecione a opção "raw" e, em seguida, escolha "JSON" no menu suspenso que aparece ao lado.
$ Insira o JSON de exemplo no corpo da requisição

# Envie a Requisição  
$ Clique no botão "Send" para enviar a requisição ao servidor.

# Verifique a Resposta
$ Veja abaixo em Response o retorno esperado.
```
<br />

**JSON Exemplo:**
```json
{
  "imageUrl": "https://2vias.com.br/wp-content/uploads/2-via-celpe.png"
}
```

<br />

### :white_check_mark: Response
Código de Status: 200 OK

```json
{
  "image_url": "https://2vias.com.br/wp-content/uploads/2-via-celpe.png",
  "measure_value": 34709632,
  "measure_uuid": "3d56be06-591d-449a-aa99-348acef48b62"
}
```

<br />

## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas no projeto:

[![Node.js](https://img.shields.io/badge/Node.js-Link-2bce3a?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![TypeScript](https://img.shields.io/badge/TypeScript-Link-2bce3a?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)&nbsp;[![Express](https://img.shields.io/badge/Express-Link-2bce3a?style=for-the-badge&logo=express)](https://expressjs.com/) [![Docker](https://img.shields.io/badge/Docker-Link-2bce3a?style=for-the-badge&logo=docker)](https://www.docker.com/)

