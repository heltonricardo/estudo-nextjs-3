import Head from "next/head";
import { useCallback } from "react";
import Botao from "../components/Botao";
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

  const clienteSelecionado = useCallback((cliente: Cliente) => {
    console.log(cliente.nome);
  }, []);

  const clienteExcluido = useCallback((cliente: Cliente) => {
    console.log(cliente);
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
          <div className="flex justify-end">
            <Botao cor="green" className="mb-2">Novo cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
}
