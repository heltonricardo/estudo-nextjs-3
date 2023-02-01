interface Props {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: React.ReactNode;
}

export default function Botao(props: Props) {
  const cor = props.cor || "gray";
  return (
    <button
      className={`
        px-4 py-2 rounded-md
        text-white bg-gradient-to-r from-${cor}-400 to-${cor}-700
        ${props.className}
    `}
    >
      {props.children}
    </button>
  );
}

/* Como as classes from-${cor}-400 e to-${cor}-700 são geradas a partir de uma lógica, é aconselhável incluir no
 * arquivo tailwind.config.js a seguinte linha:
 *
 * safelist: [{ pattern: /from-(green|blue|gray)-(400|700)/ }, { pattern: /to-(green|blue|gray)-(400|700)/ }],
 * 
 * Como o tailwind não conhece essas classes deste arquivo, ele não as incluiria no arquivo no modo de produção (na
 * verdade ele poderia incluir, mas por causa de qualquer outro arquivo que usasse essas classes de forma literal).
*/