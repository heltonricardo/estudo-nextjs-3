import { createContext, ReactElement, useState } from "react";
import TemaEnum from "../../enums/TemaEnum";

interface Props {
  tema?: TemaEnum;
  alternarTema?: () => void;
}

export const AppContext = createContext<Props>({});

export function AppProvider(props: { children: ReactElement }) {
  const [tema, setTema] = useState<TemaEnum>(TemaEnum.LIGHT);

  function alternarTema() {
    setTema(tema === TemaEnum.LIGHT ? TemaEnum.DARK : TemaEnum.LIGHT);
  }

  return <AppContext.Provider value={{ tema, alternarTema }}>{props.children}</AppContext.Provider>;
}
