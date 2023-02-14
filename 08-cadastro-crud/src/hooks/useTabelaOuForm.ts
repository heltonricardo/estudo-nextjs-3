import { useState } from "react";

export default function useTabelaOuForm() {
  const [visualizar, setVisualizar] = useState<"tabela" | "formulario">("tabela");

  const exibirTabela = () => setVisualizar("tabela");
  const exibirFormulario = () => setVisualizar("formulario");

  return {
    formularioVisivel: visualizar === "formulario",
    tabelaVisivel: visualizar === "tabela",
    exibirTabela,
    exibirFormulario,
  };
}
