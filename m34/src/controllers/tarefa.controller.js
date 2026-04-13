import * as TarefaModel from '../models/tarefa.model.js';

export async function listarTarefas(request, reply) {
  console.log("Controller: listarTarefas chamado");
  const { busca, concluido } = request.query;
  const resultado = await TarefaModel.listar({ busca, concluido });
  return reply.send(resultado);
}

export async function criarTarefa(request, reply) {
  console.log("Controller: criarTarefa chamado");
  const { descricao } = request.body;
  
  // Validação de entrada
  if (!descricao || descricao.trim() === '') {
    return reply.status(400).send({ 
      status: 'error', 
      message: 'A descrição da tarefa é obrigatória' 
    });
  }
  
  const novaTarefa = await TarefaModel.criar(descricao);
  return reply.status(201).send(novaTarefa);
}

export async function obterResumo(request, reply) {
  console.log("Controller: obterResumo chamado");
  const resumo = await TarefaModel.obterResumo();
  return reply.send(resumo);
}

// Nova função adicionada na Prática Final
export async function obterPendentes(request, reply) {
  console.log("Controller: obterPendentes chamado");
  const pendentes = await TarefaModel.listarPendentes();
  return reply.send(pendentes);
}

export async function obterTarefa(request, reply) {
  console.log("Controller: obterTarefa chamado");
  const id = Number(request.params.id);
  const tarefa = await TarefaModel.buscarPorId(id);
  
  if (!tarefa) {
    return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' });
  }
  
  return reply.send(tarefa);
}

export async function atualizarTarefa(request, reply) {
  console.log("Controller: atualizarTarefa chamado");
  const id = Number(request.params.id);
  const tarefaAtualizada = await TarefaModel.atualizar(id, request.body);
  
  if (!tarefaAtualizada) {
    return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' });
  }
  
  return reply.send(tarefaAtualizada);
}

export async function concluirTarefa(request, reply) {
  console.log("Controller: concluirTarefa chamado");
  const id = Number(request.params.id);
  const tarefaAtualizada = await TarefaModel.alternarConcluido(id);
  
  if (!tarefaAtualizada) {
    return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' });
  }
  
  return reply.send(tarefaAtualizada);
}

export async function removerTarefa(request, reply) {
  console.log("Controller: removerTarefa chamado");
  const id = Number(request.params.id);
  const removido = await TarefaModel.remover(id);
  
  if (!removido) {
    return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' });
  }
  
  return reply.status(204).send();
}