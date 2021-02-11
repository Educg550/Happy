// Importação de dependências do express e do arquivo .js com as rotas das páginas
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// Criação do servidor
const server = express()

server

// Utilizando body do req
.use(express.urlencoded({ extended: true }))
// Utilizando arquivos estáticos (não são dinâmicos), de forma que todos os arquivos da pasta public tem sua rota criada para a utilização no servidor
.use(express.static('public'))

// Configuração do template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Início do servidor
server.listen(5500)
