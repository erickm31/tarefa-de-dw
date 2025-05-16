const botao = document.getElementById('btn-boas-vindas');
const inputNome = document.getElementById('nome-completo');

botao.addEventListener('click', function() {
    const nome = inputNome.value;
    boasVindas(nome);      
});

function boasVindas(nome){
	alert('Seja bem vindo ' + nome);	
}
 