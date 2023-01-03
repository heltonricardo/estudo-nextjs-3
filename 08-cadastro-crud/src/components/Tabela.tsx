import Cliente from "../core/Cliente";

interface Props {
  clientes: Cliente[];
}

export default function Tabela(props: Props) {
  function renderCabecalho() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    );
  }

  function renderCorpo() {
    return props.clientes?.map((cliente, i) => (
      <tr key={cliente.id}>
        <td>{cliente.id}</td>
        <td>{cliente.nome}</td>
        <td>{cliente.idade}</td>
      </tr>
    ));
  }

  return (
    <table>
      <thead>{renderCabecalho()}</thead>
      <tbody>{renderCorpo()}</tbody>
    </table>
  );
}
