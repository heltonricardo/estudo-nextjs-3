export default class Cliente {
  #id: string;
  #nome: string;
  #idade: number;

  constructor(id: string = "", nome: string = "", idade: number = 0) {
    this.#id = id;
    this.#nome = nome;
    this.#idade = idade;
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get idade() {
    return this.#idade;
  }
}
