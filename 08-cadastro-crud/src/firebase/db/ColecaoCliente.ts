import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepository from "../../core/ClienteRepository";

export default class ColecaoCliente implements ClienteRepository {
  #conversor = {
    toFirestore: (cliente: Cliente) => ({ nome: cliente.nome, idade: cliente.idade }),
    fromFirestore: (
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ) => {
      const dados = snapshot.data(options);
      return new Cliente(snapshot.id, dados.nome, dados.idade);
    },
  };

  #colecao() {
    return firebase.firestore().collection("clientes").withConverter(this.#conversor);
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await this.#colecao().doc(cliente.id).set(cliente);
      return cliente;
    } else {
      const docRef = await this.#colecao().add(cliente);
      const doc = await docRef.get();
      return doc.data() || new Cliente();
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    this.#colecao().doc(cliente.id).delete();
  }

  async listar(): Promise<Cliente[]> {
    const query = await this.#colecao().get();
    return query.docs.map((doc) => doc.data());
  }
}
