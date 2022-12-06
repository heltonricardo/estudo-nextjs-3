import { IconeCasa, IconeEngrenagem, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
      <div
        className={`
          h-20 w-20
          flex flex-col justify-center items-center
          bg-gradient-to-r from-gray-800 to-gray-700
        `}
      >
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeEngrenagem} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
    </aside>
  );
}
