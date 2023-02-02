import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface Props {
  cliente?: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: Props) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome || "");
  const [idade, setIdade] = useState(props.cliente?.idade || 0);

  return (
    <div>
      {id && <Entrada texto="Código" valor={id} somenteLeitura className="mb-5" />}
      <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-5" />
      <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} className="mb-5" />
      <div className="flex justify-end">
        <Botao onClick={() => props.clienteMudou?.(new Cliente(id, nome, idade))} cor="blue">
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado} className="ml-2">
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
