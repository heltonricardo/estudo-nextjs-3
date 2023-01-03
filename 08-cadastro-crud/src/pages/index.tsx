import Head from "next/head";
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
          bg-gradient-to-b from-blue-600 to-purple-600
          text-white
      `}
      >
        <Layout titulo="Cadastro CRUD">
          <Tabela clientes={clientes} />
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
}
