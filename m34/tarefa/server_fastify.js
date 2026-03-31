
import Fastify from 'fastify'
import cors from '@fastify/cors'

// Registramos o plugin de CORS para permitir que qualquer origem acesse nossa API



const server = Fastify({ logger: false })

server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']})


server.get('/', async (request, reply) => {
  reply.send('Bem-vindo à página inicial!')
})

server.get('/sobre', async (request, reply) => {
  reply.send('Esta é a página Sobre.')
})

server.get('/contato', async (request, reply) => {
  reply.send('Página de contato.')
})

server.setNotFoundHandler(async (request, reply) => {
  reply.code(404).send('Página não encontrada.')
})

const PORT = 3000

try {
  await server.listen({ port: PORT })
  console.log(`Servidor rodando com FASTIFY na porta ${PORT}`)
} catch (err) {

  server.log.error(err)
  process.exit(1)
}

