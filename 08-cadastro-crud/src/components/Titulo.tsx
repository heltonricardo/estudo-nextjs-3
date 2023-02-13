interface Props {
  children: string;
}
export default function Titulo(props: Props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2 text-2xl">{props.children}</h1>
      <div className="px-5 py-2">
        <p>⚠️ Atenção: Os dados desta página são inseridos dinamicamente pelos usuários visitantes.</p>
        <p>⚠️ O autor do projeto não assume responsabilidade pelo conteúdo aqui apresentado.</p>
      </div>
      <hr className="border-2 border-purple-500" />
    </div>
  );
}
