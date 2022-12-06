import Link from "next/link";

interface Props {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (evento: any) => void;
}

export default function MenuItem(props: Props) {
  function renderConteudo() {
    return (
      <div
        className={`
        h-20 w-20
        flex flex-col justify-center items-center
        text-gray-600
        dark:text-gray-200
        ${props.className || ""}`}
      >
        {props.icone}
        <span className="text-xs font-light">{props.texto}</span>
      </div>
    );
  }

  return (
    <li
      className={`
        cursor-pointer
        hover:bg-gray-100
        dark:hover:bg-gray-800
    `}
      onClick={props.onClick}
    >
      {props.url ? <Link href={props.url}>{renderConteudo()}</Link> : renderConteudo()}
    </li>
  );
}
