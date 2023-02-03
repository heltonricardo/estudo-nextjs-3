import Head from "next/head";
import { useCallback, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("1", "Ana", 21),
    new Cliente("2", "Bia", 22),
    new Cliente("3", "Carol", 23),
    new Cliente("4", "Diego", 24),
  ];

  const [visualizar, setVisualizar] = useState<"tabela" | "formulario">("tabela");
  const [cliente, setCliente] = useState(new Cliente());

  const clienteSelecionado = useCallback((cliente: Cliente) => {
    setCliente(cliente);
    setVisualizar("formulario");
  }, []);

  const clienteExcluido = useCallback((cliente: Cliente) => {
    console.log(cliente);
  }, []);

  const criarCliente = useCallback(() => {
    setCliente(new Cliente());
    setVisualizar("formulario");
  }, []);

  const salvarCliente = useCallback((cliente: Cliente) => {
    console.log(cliente);
    setVisualizar("tabela");
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
