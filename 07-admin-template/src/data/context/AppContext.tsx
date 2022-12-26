import { createContext, ReactElement, useState } from "react";
import TemaEnum from "../../enums/TemaEnum";

interface Props {
  tema?: TemaEnum;
  alternarTema?: () => void;
}

export const AppContext = createContext<Props>({});

export function AppProvider(props: { children: ReactElement }) {
  const [tema, setTema] = useState<TemaEnum>(TemaEnum.CLARO);

  function alternarTema() {
    setTema(tema === TemaEnum.CLARO ? TemaEnum.ESCURO : TemaEnum.CLARO);
  }

  return <AppContext.Provider value={{ tema, alternarTema }}>{props.children}</AppContext.Provider>;
}
