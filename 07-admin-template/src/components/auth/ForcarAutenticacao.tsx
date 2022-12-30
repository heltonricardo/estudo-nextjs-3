import router from "next/router";
import { ReactElement } from "react";
import useAuth from "../../data/hook/useAuth";
import RotasEnum from "../../enums/RotasEnum";
import Carregando from "../template/Carregando";

interface Props {
  children: ReactElement;
}

export default function ForcarAutenticacao(props: Props) {
  const { usuario, isCarregando } = useAuth();

  function renderConteudo() {
    return props.children;
  }

  function renderCarregamento() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-400">
        <Carregando />
      </div>
    );
  }

  if (usuario?.email && !isCarregando) {
    return renderConteudo();
  }
  if (isCarregando) {
    return renderCarregamento();
  }
  router.push(RotasEnum.AUTH);
  return null;
}
