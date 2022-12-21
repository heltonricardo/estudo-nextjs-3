interface Props {
  rotulo: string;
  valor: any;
  tipo?: "text" | "email" | "password";
  obrigatorio?: boolean;
  ocultar?: boolean;
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: Props) {
  return !props.ocultar ? (
    <div className="flex flex-col mt-4">
      <label htmlFor={props.rotulo}>{props.rotulo}</label>
      <input
        id={props.rotulo}
        value={props.valor}
        type={props.tipo || "text"}
        required={props.obrigatorio}
        onChange={(evento) => props.valorMudou(evento.target.value)}
        className={`
          px-4 py-3 mt-2 rounded-lg
          bg-gray-100 border
          focus:border-blue-500 focus:outline-none focus:bg-white
        `}
      />
    </div>
  ) : null;
}
