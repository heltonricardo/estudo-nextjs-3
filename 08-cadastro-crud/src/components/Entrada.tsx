interface Props {
  texto: string;
  tipo?: "text" | "number";
  somenteLeitura?: boolean;
  className?: string;
  valor: any;
  valorMudou?: (novoValor: any) => void;
}

export default function Entrada(props: Props) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-1">{props.texto}</label>
      <input
        type={props.tipo || "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
            px-4 py-2
            border border-purple-500 rounded-lg
            focus:outline-none ${props.somenteLeitura || "focus:bg-white"}
            bg-gray-50
        `}
      />
    </div>
  );
}
