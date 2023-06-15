import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"
import Agenda from "./agenda";

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public dataNascimento: Date
    public dataCadastro: Date
    public telefones: Telefone[] = []
    public endereco: Endereco
    public documentos: Documento[] = []
    public dependentes: Cliente[] = []
    public titular: Cliente
    public agenda: Agenda;

}