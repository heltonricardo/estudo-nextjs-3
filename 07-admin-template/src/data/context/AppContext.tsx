import { createContext } from "react";

interface Props {
  children: any;
}

export const AppContext = createContext({ valor: "" });

export function AppProvider(props: Props) {
  const objeto = { valor: "Teste Context API" };
  return <AppContext.Provider value={objeto}>{props.children}</AppContext.Provider>;
}
