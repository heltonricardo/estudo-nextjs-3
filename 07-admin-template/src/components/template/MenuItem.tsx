interface Props {
  url: string;
  texto: string;
  icone: any;
}

export default function MenuItem(props: Props) {
  return <li className="">{props.icone}</li>;
}
