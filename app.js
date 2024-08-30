import { fastify } from "fastify"

const server = fastify()

server.get('/', () => {
    return 'Hello'
})

server.get('/teste', () => {
    return 'Teste'
})

server.get('/gd', () => {
    return 'Gustavo Dias'
})

server.listen({
    port: 5000
})