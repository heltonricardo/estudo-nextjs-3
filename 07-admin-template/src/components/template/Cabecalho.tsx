import Titulo from "./Titulo";

interface Props {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: Props) {
  return (
    <>
      <Titulo {...props} />
    </>
  );
}
