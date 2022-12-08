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
    <div className="flex flex-col">
      <label htmlFor={props.rotulo}>{props.rotulo}</label>
      <input
        id={props.rotulo}
        value={props.valor}
        type={props.tipo || "text"}
        required={props.obrigatorio}
        onChange={(evento) => props.valorMudou(evento.target.value)}
      />
    </div>
  ) : null;
}
