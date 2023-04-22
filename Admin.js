import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimmento, role = "admin", ativo = true) {
    super(nome, email, nascimmento, role, ativo)
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}

// const novoAdmin = new Admin("Rodrigo","r#r.com", "2021-01-01")
// console.log(novoAdmin.nome)
// novoAdmin.nome = ""
// console.log(novoAdmin.nome)