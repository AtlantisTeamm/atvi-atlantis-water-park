import Prototipo from "../interfaces/prototipo";
import Telefone from "./telefone";

export default class Agenda {
  public telefones: Telefone[] = [];

  public clonar(): Prototipo {
    let agenda = new Agenda();
    agenda.telefones = this.telefones;
    return agenda;
  }
}