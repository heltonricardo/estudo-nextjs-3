import Cliente from "../core/Cliente";

interface Props {
  clientes: Cliente[];
}

export default function Tabela(props: Props) {
  function renderCabecalho() {
    return (
      <tr>
        <th className="p-4">Código</th>
        <th className="p-4">Nome</th>
        <th className="p-4">Idade</th>
      </tr>
    );
  }

  function renderCorpo() {
    return props.clientes?.map((cliente, i) => (
      <tr key={cliente.id} className={i % 2 ? "bg-purple-200" : "bg-purple-100"}>
        <td className="p-4">{cliente.id}</td>
        <td className="p-4">{cliente.nome}</td>
        <td className="p-4">{cliente.idade}</td>
      </tr>
    ));
  }

  return (
    <table className="w-full text-left rounded-xl overflow-hidden">
      <thead
        className={`
          text-gray-100
          bg-gradient-to-b from bg-purple-500 to-purple-800
      `}
      >
        {renderCabecalho()}
      </thead>
      <tbody>{renderCorpo()}</tbody>
    </table>
  );
}
