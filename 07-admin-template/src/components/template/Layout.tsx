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
    <div className="flex h-screen w-screen">
      <MenuLateral />
      <div
        className={`flex flex-col w-full p-7 bg-gray-300
                dark dark:bg-red-900`}
      >
        <Titulo {...props} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
