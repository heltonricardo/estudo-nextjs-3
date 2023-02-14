import { useCallback, useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ColecaoCliente from "../firebase/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo = new ColecaoCliente();

  const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm();

  const [cliente, setCliente] = useState(new Cliente());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(listar, []);

  function listar() {
    repo.listar().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  const clienteSelecionado = useCallback((cliente: Cliente) => {
    setCliente(cliente);
    exibirFormulario();
  }, []);

  const clienteExcluido = useCallback(async (cliente: Cliente) => {
    await repo.excluir(cliente);
    listar();
  }, []);

  const criarCliente = useCallback(() => {
    setCliente(new Cliente());
    exibirFormulario();
  }, []);

  const salvarCliente = useCallback(async (cliente: Cliente) => {
    await repo.salvar(cliente);
    listar();
  }, []);

  return {
    cliente,
    clientes,
    tabelaVisivel,
    clienteSelecionado,
    clienteExcluido,
    criarCliente,
    salvarCliente,
    exibirTabela,
  };
}
