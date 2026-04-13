import Fastify from 'fastify';
import cors from '@fastify/cors';

// Importa o arquivo que mapeia as rotas
import tarefaRoutes from './src/routes/tarefa.routes.js';

const server = Fastify();

server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
});

// Registra as rotas de tarefas no servidor
server.register(tarefaRoutes);

// Configuração para rotas não encontradas
server.setNotFoundHandler((request, reply) => {
  reply.code(404).send({
    status: 'error',
    message: 'O recurso solicitado não existe nesta API.',
  });
});

const PORT = 3000;

const start = async () => {
    try {
        await server.listen({ port: PORT });
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    } catch (erro) {
        console.error(erro);
        process.exit(1);
    }
};

start();