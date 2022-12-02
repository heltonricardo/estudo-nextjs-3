interface Props {
  children?: any;
}

export default function Conteudo(props: Props) {
  return <div className="flex flex-col mt-7">{props.children}</div>;
}
