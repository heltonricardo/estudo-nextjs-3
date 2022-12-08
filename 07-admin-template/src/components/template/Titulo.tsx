interface Props {
  titulo: string;
  subtitulo: string;
}

export default function Titulo(props: Props) {
  return (
    <div className="flex-col">
      <h1 className="font-black text-3xl text-gray-900 dark:text-gray-100">{props.titulo}</h1>
      <h2 className="font-light text-sm text-gray-600 dark:text-gray-300">{props.subtitulo}</h2>
    </div>
  );
}
