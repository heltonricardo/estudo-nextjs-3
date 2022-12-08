import Head from "next/head";
import useAppData from "../../data/hook/useAppData";
import TemaEnum from "../../enums/TemaEnum";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface Props {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: Props) {
  const { tema } = useAppData();

  return (
    <>
      <Head>
        <title>Admin Template</title>
        <meta name="description" content="Admin Template by Helton Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex h-screen w-screen ${tema === TemaEnum.DARK && "dark"}`}>
        <MenuLateral />
        <div
          className={`
            w-full p-7
            flex flex-col
            bg-gray-300
            dark:bg-gray-800
          `}
        >
          <Cabecalho {...props} />
          <Conteudo>{props.children}</Conteudo>
        </div>
      </div>
    </>
  );
}
