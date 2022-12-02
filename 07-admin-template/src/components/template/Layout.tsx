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
      <MenuLateral />
      <Titulo {...props} />
      <Conteudo>{props.children}</Conteudo>
    </>
  );
}
