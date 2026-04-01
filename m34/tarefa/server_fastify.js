import Fastify from 'fastify'
import cors from '@fastify/cors'

const server = Fastify({ logger: false })

await server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']
})

let tarefas = [
  { id: 1, descricao: 'Estudar Fastify', concluido: false },
  { id: 2, descricao: 'Fazer compras do mês', concluido: true },
  { id: 3, descricao: 'Lavar o carro', concluido: false }
];
let proximoId = 4;

server.get('/', async (request, reply) => {
  reply.send('Bem-vindo à página inicial!')
})

server.get('/sobre', async (request, reply) => {
  reply.send('Esta é a página Sobre.')
})

server.get('/contato', async (request, reply) => {
  reply.send('Página de contato.')
})

// Listar tarefas (Com filtros de busca e concluído)
server.get('/tarefas', async (request, reply) => {
  const { busca, concluido } = request.query;
  let resultado = tarefas;

  if (busca) {
    const termoBusca = busca.toLowerCase();
    resultado = resultado.filter(tarefa => 
      tarefa.descricao.toLowerCase().includes(termoBusca)
    );
  }

  if (concluido !== undefined) {
    resultado = resultado.filter(tarefa => 
      String(tarefa.concluido) === concluido
    );
  }

  return resultado;
})

// Visão Geral / Resumo (Obrigatório estar antes de rotas com :id)
server.get('/tarefas/resumo', async (request, reply) => {
  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluido === true).length;
  const pendentes = total - concluidas;

  return {
    total,
    concluidas,
    pendentes
  };
})

// Adicionar nova tarefa
server.post('/tarefas', async (request, reply) => {
  const { descricao } = request.body || {}; 
  
  if (!descricao || descricao.trim() === '') {
    return reply.code(400).send({ 
      erro: 'Bad Request',
      mensagem: 'A descrição da tarefa é obrigatória e não pode estar vazia.' 
    });
  }

  const novaTarefa = {
    id: proximoId++,
    descricao: descricao.trim(),
    concluido: false
  };

  tarefas.push(novaTarefa);
  
  return reply.code(201).send(novaTarefa);
})

// Atualizar status de uma tarefa específica
server.patch('/tarefas/:id', async (request, reply) => {
  const id = Number(request.params.id);
  const { concluido } = request.body;

  const tarefaIndex = tarefas.findIndex(t => t.id === id);

  if (tarefaIndex === -1) {
    return reply.code(404).send({ erro: 'Tarefa não encontrada' });
  }

  tarefas[tarefaIndex].concluido = concluido;
  return tarefas[tarefaIndex];
})

// Alternar (Toggle) o status de uma tarefa
server.patch('/tarefas/:id/concluir', async (request, reply) => {
  const id = Number(request.params.id);

  const tarefaIndex = tarefas.findIndex(t => t.id === id);

  if (tarefaIndex === -1) {
    return reply.code(404).send({ erro: 'Tarefa não encontrada' });
  }

  tarefas[tarefaIndex].concluido = !tarefas[tarefaIndex].concluido;

  return reply.send(tarefas[tarefaIndex]);
})


server.delete('/tarefas/:id', async (request, reply) => {
  const id = Number(request.params.id);
  const tarefaIndex = tarefas.findIndex(t => t.id === id);

  if (tarefaIndex === -1) {
    return reply.code(404).send({ erro: 'Tarefa não encontrada' });
  }

  tarefas.splice(tarefaIndex, 1);
  return reply.code(204).send();
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