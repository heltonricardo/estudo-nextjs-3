import { createContext, ReactElement, useEffect, useState } from "react";
import TemaEnum from "../../enums/TemaEnum";

interface Props {
  tema?: TemaEnum;
  alternarTema?: () => void;
}

const LS_TEMA = "tema";

export const AppContext = createContext<Props>({});

export function AppProvider(props: { children: ReactElement }) {
  const [tema, setTema] = useState<TemaEnum>(TemaEnum.CLARO);

  function alternarTema() {
    const novoTema = tema === TemaEnum.CLARO ? TemaEnum.ESCURO : TemaEnum.CLARO;
    setTema(novoTema);
    localStorage.setItem(LS_TEMA, novoTema.toString());
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem(LS_TEMA);
    setTema(temaSalvo === TemaEnum.ESCURO.toString() ? TemaEnum.ESCURO : TemaEnum.CLARO);
  }, []);

  return <AppContext.Provider value={{ tema, alternarTema }}>{props.children}</AppContext.Provider>;
}
