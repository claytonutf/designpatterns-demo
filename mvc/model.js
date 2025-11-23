// O Model é responsável por gerenciar os dados da aplicação.
// Ele NÃO lida com interface e NÃO sabe nada sobre DOM ou HTML.
export class ModeloTarefa {
  constructor() {
    // Armazena a lista de tarefas.
    // Note que o Model mantém o estado da aplicação.
    this.tarefas = [];
  }

  /*
    adiciona uma nova tarefa à lista.

    Parâmetros:
      - titulo: texto digitado pelo usuário.

    Funções do Model:
      ✔ criar objetos de tarefa
      ✔ definir estrutura dos dados
      ✔ armazenar dados no estado interno
  */
  adicionarTarefa(titulo) {

    // Cria um objeto tarefa com estrutura padronizada
    const novaTarefa = {
      id: Date.now(),     // gera um ID único baseado no timestamp atual
      titulo,             // título recebido como parâmetro
      concluida: false    // toda tarefa começa como "não concluída"
    };

    // Armazena a nova tarefa na lista interna
    this.tarefas.push(novaTarefa);

    // Retorna a tarefa criada (útil para testes ou logs)
    return novaTarefa;
  }

  /*
    Retorna todas as tarefas armazenadas no Model.

    Importante:
      - O Controller usa este método para obter dados e
        pedir à View que os renderize.
      - A View nunca acessa diretamente o Model,
        garantindo o isolamento de responsabilidades.
  */
  obterTarefas() {
    return this.tarefas;
  }
}
