import BotaoTema from "./BotaoTema";
import Titulo from "./Titulo";

interface Props {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: Props) {
  return (
    <div className="flex items-center">
      <Titulo {...props} />
      <div className="flex flex-grow justify-end">
        <BotaoTema />
      </div>
    </div>
  );
}
