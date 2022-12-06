import Head from "next/head";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";
import Titulo from "./Titulo";

interface Props {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>Admin Template</title>
        <meta name="description" content="Admin Template by Helton Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark flex h-screen w-screen">
        <MenuLateral />
        <div
          className={`
            w-full p-7
            flex flex-col
            bg-gray-300
            dark:bg-gray-800
          `}
        >
          <Titulo {...props} />
          <Conteudo>{props.children}</Conteudo>
        </div>
      </div>
    </>
  );
}
