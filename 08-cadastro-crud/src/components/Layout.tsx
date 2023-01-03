import Titulo from "./Titulo";

interface Props {
  titulo: string;
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <div className="flex flex-col w-2/3 text-gray-800 bg-gray-100 rounded-md">
      <Titulo>{props.titulo}</Titulo>
      <div className="p-6">{props.children}</div>
    </div>
  );
}
