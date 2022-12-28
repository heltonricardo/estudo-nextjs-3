import Link from "next/link";
import useAuth from "../../data/hook/useAuth";
import RotasEnum from "../../enums/RotasEnum";
import { IconeBaloes } from "../icons";

export default function AvatarUsuario() {
  const { usuario } = useAuth();
  const urlImagem = usuario?.imagemUrl;

  return (
    <Link
      href={RotasEnum.PERFIL}
      className={`
          h-20 min-h-[5rem] w-20
          flex flex-col justify-center items-center
          bg-gradient-to-r from-gray-800 to-gray-700
          dark:from-gray-600 dark:to-gray-700
        `}
    >
      {urlImagem ? <img src={urlImagem} alt="Imagem do Usuário" /> : IconeBaloes(10)}
    </Link>
  );
}
