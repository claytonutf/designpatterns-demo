// Importa o Model (responsável pelos dados e regras de negócio)
import { ModeloTarefa } from "./model.js";

// Importa a View (responsável por lidar com a interface e eventos do usuário)
import { VisaoTarefa } from "./view.js";

// O Controller faz a ponte entre Model e View
export class ControladorTarefa {
  constructor() {

    // Instancia o Model, que armazena e gerencia a lista de tarefas
    this.modelo = new ModeloTarefa();

    // Instancia a View, que manipula o DOM e captura interações do usuário
    this.visao = new VisaoTarefa();

    /*
      Liga um evento da View (clicar no botão "Adicionar") 
      ao método do Controller que vai processar a ação.

      - A View não adiciona tarefas diretamente.
      - Ela apenas captura o evento e chama o Controller.

      O .bind(this) garante que o "this" dentro do método 
      handleAdicionarTarefa se refira corretamente ao Controller.
    */
    this.visao.vincularAdicionarTarefa(this.handleAdicionarTarefa.bind(this));

    /*
      Renderiza inicialmente a lista de tarefas.

      O Controller pede ao Model os dados (tarefas),
      e então ordena que a View exiba esses dados na interface.
    */
    this.visao.renderizar(this.modelo.obterTarefas());
  }

  /*
    Método chamado sempre que o usuário quer adicionar uma tarefa.

    O fluxo é:
    1. O Controller recebe o título digitado na View.
    2. Solicita ao Model para criar e armazenar a tarefa.
    3. Pede à View para renderizar novamente a interface com os dados atualizados.
  */
  handleAdicionarTarefa(titulo) {

    // Atualiza os dados chamando o Model
    this.modelo.adicionarTarefa(titulo);

    // Atualiza a interface chamando a View
    this.visao.renderizar(this.modelo.obterTarefas());
  }
}
