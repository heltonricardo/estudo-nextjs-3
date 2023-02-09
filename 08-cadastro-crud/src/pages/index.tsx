import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ColecaoCliente from "../firebase/db/ColecaoCliente";

export default function Home() {
  const repo = new ColecaoCliente();

  const [visualizar, setVisualizar] = useState<"tabela" | "formulario">("tabela");
  const [cliente, setCliente] = useState(new Cliente());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(listar, []);

  function listar() {
    repo.listar().then((clientes) => {
      setClientes(clientes);
      setVisualizar("tabela");
    });
  }

  const clienteSelecionado = useCallback((cliente: Cliente) => {
    setCliente(cliente);
    setVisualizar("formulario");
  }, []);

  const clienteExcluido = useCallback(async (cliente: Cliente) => {
    await repo.excluir(cliente);
    listar();
  }, []);

  const criarCliente = useCallback(() => {
    setCliente(new Cliente());
    setVisualizar("formulario");
  }, []);

  const salvarCliente = useCallback(async (cliente: Cliente) => {
    await repo.salvar(cliente);
    listar();
  }, []);

  return (
    <div>
      <Head>
        <title>Cadastro CRUD</title>
        <meta name="Projeto Cadastro CRUD" content="Feito por Helton Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`
          flex justify-center items-center
          h-screen
          text-white bg-gradient-to-b from-blue-600 to-purple-600
      `}
      >
        <Layout titulo="Cadastro CRUD">
          {visualizar === "tabela" ? (
            <>
              <div className="flex justify-end">
                <Botao onClick={criarCliente} cor="green" className="mb-2">
                  Novo cliente
                </Botao>
              </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
            </>
          ) : (
            <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => setVisualizar("tabela")} />
          )}
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
}
