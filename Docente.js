import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimmento, role = "docente", ativo = true) {
    super(nome, email, nascimmento, role, ativo)
  }

  aprovaEstudante(estudante, curso) {
    return `estudante ${estudante} passou no curso ${curso}.`
  }
}

const novoDocente = new Docente("Mariana", "m@m.com", "2021-01-01")

