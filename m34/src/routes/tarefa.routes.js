import * as TarefaController from '../controllers/tarefa.controller.js';

export default async function tarefaRoutes(server, options) {
  
  server.get('/tarefas', async (request, reply) => {
    console.log("Routes: GET /tarefas chamada");
    return TarefaController.listarTarefas(request, reply);
  });

  server.post('/tarefas', async (request, reply) => {
    console.log("Routes: POST /tarefas chamada");
    return TarefaController.criarTarefa(request, reply);
  });

  // ATENÇÃO À ORDEM DAS ROTAS: 
  // Rotas fixas (/resumo, /pendentes) vêm ANTES da rota com parâmetro dinâmico (/:id)
  
  server.get('/tarefas/resumo', async (request, reply) => {
    console.log("Routes: GET /tarefas/resumo chamada");
    return TarefaController.obterResumo(request, reply);
  });

  // Nova rota adicionada na Prática Final
  server.get('/tarefas/pendentes', async (request, reply) => {
    console.log("Routes: GET /tarefas/pendentes chamada");
    return TarefaController.obterPendentes(request, reply);
  });

  server.get('/tarefas/:id', async (request, reply) => {
    console.log("Routes: GET /tarefas/:id chamada");
    return TarefaController.obterTarefa(request, reply);
  });

  server.patch('/tarefas/:id', async (request, reply) => {
    console.log("Routes: PATCH /tarefas/:id chamada");
    return TarefaController.atualizarTarefa(request, reply);
  });

  server.patch('/tarefas/:id/concluir', async (request, reply) => {
    console.log("Routes: PATCH /tarefas/:id/concluir chamada");
    return TarefaController.concluirTarefa(request, reply);
  });

  server.delete('/tarefas/:id', async (request, reply) => {
    console.log("Routes: DELETE /tarefas/:id chamada");
    return TarefaController.removerTarefa(request, reply);
  });
  
}