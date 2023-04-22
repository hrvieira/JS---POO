import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User ("Mariana", "m@m.com", "2021-01-01")
console.log(novoUser.exibirInfos())

// novoUser.nome = "Márcia" // nova propriedade - #nome já mostra erro antes de ser chamado
const novoAdmin = new Admin("Rodrigo", "r@r.com", "2021-01-01")
console.log(novoAdmin.nome)

novoAdmin.nome = "André"
console.log(novoAdmin.nome)

const novoDocente = new Docente("Guilherme", "g@g.com", "2021-01-01")
console.log(novoDocente.exibirInfos())