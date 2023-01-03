import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
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
          <span>Conteúdo</span>
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
}
