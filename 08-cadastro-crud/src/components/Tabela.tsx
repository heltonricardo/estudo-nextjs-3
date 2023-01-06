import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixeira } from "./Icones";

interface Props {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: Props) {
  const exibirEditar = props.clienteSelecionado;
  const exibirExcluir = props.clienteExcluido;
  const exibirAcoes = exibirEditar || exibirExcluir;

  function renderCabecalho() {
    return (
      <tr>
        <th className="p-4">Código</th>
        <th className="p-4">Nome</th>
        <th className="p-4">Idade</th>
        {exibirAcoes && <th className="p-4 text-center">Ações</th>}
      </tr>
    );
  }

  function renderAcoes(cliente: Cliente) {
    const estilo = "p-1 m-2 rounded-full";
    return (
      <td className="flex justify-center p-1">
        {exibirEditar && (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className={`text-green-600 hover:bg-green-50 ${estilo}`}
          >
            {IconeEdicao()}
          </button>
        )}
        {exibirExcluir && (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className={`text-red-600 hover:bg-red-100 ${estilo}`}
          >
            {IconeLixeira()}
          </button>
        )}
      </td>
    );
  }

  function renderCorpo() {
    return props.clientes?.map((cliente, i) => (
      <tr key={cliente.id} className={i % 2 ? "bg-purple-200" : "bg-purple-100"}>
        <td className="align-middle p-4">{cliente.id}</td>
        <td className="align-middle p-4">{cliente.nome}</td>
        <td className="align-middle p-4">{cliente.idade}</td>
        {(props.clienteSelecionado || props.clienteExcluido) && renderAcoes(cliente)}
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
