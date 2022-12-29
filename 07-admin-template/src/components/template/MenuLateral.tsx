import useAuth from "../../data/hook/useAuth";
import { IconeCasa, IconeEngrenagem, IconeLogout, IconeSino } from "../icons";
import ImagemUsuario from "./ImagemUsuario";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  const { logout } = useAuth();

  return (
    <aside
      className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}
    >
      <ImagemUsuario />

      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeEngrenagem} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>

      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeLogout}
          onClick={logout}
          className={`
            text-red-600 hover:bg-red-400 hover:text-white
            dark:text-red-600 dark:hover:bg-red-400 dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}
