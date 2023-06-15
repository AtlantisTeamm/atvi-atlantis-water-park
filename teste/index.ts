import Agenda from "../modelos/agenda";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let cliente = new Cliente();
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`;
cliente.nomeSocial = `Dom Pedro II`;
cliente.dataCadastro = new Date(1840, 6, 23);
cliente.dataNascimento = new Date(1825, 11, 2);

let endereco = new Endereco();
endereco.rua = `R. do Catete`;
endereco.bairro = `Copacabana`;
endereco.cidade = `Rio de Janeiro`;
endereco.estado = `Rio de Janeiro`;
endereco.pais = `Brasil`;
endereco.codigoPostal = `22220-000`;
cliente.endereco = endereco;

let telefone = new Telefone();
telefone.ddd = "12";
telefone.numero = "91111-1111";

let agenda = new Agenda();
agenda.telefones.push(telefone);
cliente.agenda = agenda;

let dependente = new Cliente();
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`;
dependente.nomeSocial = `Princesa Isabel`;
dependente.dataCadastro = new Date(1921, 10, 14);
dependente.dataNascimento = new Date(1846, 6, 29);
dependente.endereco = cliente.endereco.clonar() as Endereco;
dependente.agenda = cliente.agenda.clonar() as Agenda;

dependente.titular = cliente;
cliente.dependentes.push(dependente);

console.log("CLIENTE: ", cliente);
console.log("DEPENDENTE: ", dependente);