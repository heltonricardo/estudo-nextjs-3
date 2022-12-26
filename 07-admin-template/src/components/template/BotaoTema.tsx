import useAppData from "../../data/hook/useAppData";
import TemaEnum from "../../enums/TemaEnum";
import { IconeLua, IconeSol } from "../icons";

export default function BotaoTema() {
  const { tema, alternarTema } = useAppData();

  let icone, cores;

  if (tema === TemaEnum.CLARO) {
    icone = IconeLua;
    cores = "text-gray-200 bg-gradient-to-l from-gray-500 to-gray-900";
  } else {
    icone = IconeSol;
    cores = "text-gray-700 bg-gradient-to-r from-yellow-300 to-yellow-600";
  }

  return (
    <div
      onClick={alternarTema}
      className={`
        ${cores}
        hidden sm:flex justify-center items-center
        h-fit p-1 rounded-full cursor-pointer
      `}
    >
      {icone}
    </div>
  );
}
