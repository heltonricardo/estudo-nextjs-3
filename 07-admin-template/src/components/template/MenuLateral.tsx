import { IconeCasa, IconeEngrenagem, IconeLogout, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col">
      <div
        className={`
          h-20 w-20
          flex flex-col justify-center items-center
          bg-gradient-to-r from-gray-800 to-gray-700
        `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeEngrenagem} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeLogout}
          onClick={() => console.log("Saindo")}
          className="text-red-600 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  );
}
