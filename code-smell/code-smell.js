// CODE SMELL: Tudo misturado
// Problema: Este código reúne regras de negócio, manipulação de DOM e estado
// da aplicação no mesmo lugar. Isso gera forte acoplamento, dificulta testes,
// reduz a manutenção e impede reutilização de código.

// Estado global (má prática)
// Problema: variáveis soltas no escopo global podem ser modificadas de qualquer lugar,
// gerando comportamento imprevisível e tornando o código difícil de depurar.
let tarefas = [];

function adicionarTarefa() {
  // A função conhece diretamente os elementos da interface (acoplamento com o DOM).
  const entradaTarefa = document.getElementById("entradaTarefa");
  const listaTarefas = document.getElementById("listaTarefas");

  // Aqui está ocorrendo regra de negócio (validação de dados) dentro da função de UI.
  if (entradaTarefa.value.trim() === "") {
    alert("A tarefa não pode estar vazia!");
    return;
  }

  // Aqui temos lógica de modelo (criação de objeto).
  // O código deveria estar em uma classe "ModeloTarefa", separado da lógica visual.
  const novaTarefa = {
    id: Date.now(),
    titulo: entradaTarefa.value,
    concluida: false
  };

  // Alteração do estado diretamente
  tarefas.push(novaTarefa);

  // CODE SMELL: Atualizando a UI diretamente (UI + lógica de negócio no mesmo lugar)
  // Problema: Se a interface mudar (ex: virar lista com checkbox), será necessário
  // alterar esta função, mesmo sendo uma mudança puramente de apresentação.
  const li = document.createElement("li");
  li.innerText = novaTarefa.titulo;
  listaTarefas.appendChild(li);

  // Limpeza do campo (UI novamente)
  entradaTarefa.value = "";
}

// Outro CODE SMELL: a função é registrada diretamente no DOM
// Isso força a função a sempre depender da UI e impede testes unitários reais.
document.getElementById("botaoAdicionar").addEventListener("click", adicionarTarefa);
