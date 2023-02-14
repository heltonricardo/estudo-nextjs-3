import Head from "next/head";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    tabelaVisivel,
    criarCliente,
    clienteSelecionado,
    clienteExcluido,
    salvarCliente,
    exibirTabela,
  } = useClientes();

  console.log(tabelaVisivel)

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
          {tabelaVisivel ? (
            <>
              <div className="flex justify-end">
                <Botao onClick={criarCliente} cor="green" className="mb-2">
                  Novo cliente
                </Botao>
              </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
            </>
          ) : (
            <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => exibirTabela()} />
          )}
        </Layout>
      </main>

      <footer></footer>
    </div>
  );
}
