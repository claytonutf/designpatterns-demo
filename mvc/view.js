export class VisaoTarefa {
  constructor() {
    // Captura os elementos da interface (DOM) que serão manipulados pela View.
    // Esses elementos devem existir no HTML com esses ids.
    this.entradaTarefa = document.getElementById("entradaTarefa");
    this.botaoAdicionar = document.getElementById("botaoAdicionar");
    this.listaTarefas = document.getElementById("listaTarefas");
  }

  // Método responsável por vincular uma função de callback ao botão "Adicionar".
  // Essa função é enviada pelo Controller, mantendo a View independente das regras de negócio.
  vincularAdicionarTarefa(handler) {
    this.botaoAdicionar.addEventListener("click", () => {
      // Captura o texto digitado no campo de entrada e remove espaços sobrando.
      const valor = this.entradaTarefa.value.trim();

      // Só chama o handler se houver texto válido.
      if (valor) {
        // O handler é a ponte para o Controller → Modelo.
        handler(valor);

        // Limpa o campo após o envio.
        this.entradaTarefa.value = "";
      }
    });
  }

  // Atualiza visualmente a lista de tarefas na tela.
  // A View nunca deve decidir o que renderizar — ela apenas exibe os dados enviados pelo Controller.
  renderizar(tarefas) {
    // Limpa a lista antes de reconstruir o conteúdo.
    this.listaTarefas.innerHTML = "";

    // Para cada tarefa vinda do Modelo, cria um novo <li> no HTML.
    tarefas.forEach((tarefa) => {
      const li = document.createElement("li");

      // Insere apenas o título da tarefa (poderia ter checkbox, botão excluir, etc.).
      li.innerText = tarefa.titulo;

      // Adiciona o item visual na lista do DOM.
      this.listaTarefas.appendChild(li);
    });
  }
}
