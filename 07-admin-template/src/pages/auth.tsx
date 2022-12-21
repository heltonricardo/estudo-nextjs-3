import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import AuthEnum from "../enums/AuthEnum";

export default function Auth() {
  const [modo, setModo] = useState<AuthEnum>(AuthEnum.LOGIN);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function submeter() {
    if (modo === AuthEnum.LOGIN) {
      console.log(AuthEnum.LOGIN);
    } else {
      console.log(AuthEnum.CADASTRO);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-1/2">
        <h1 className="text-xl font-bold mb-5">
          {modo === AuthEnum.LOGIN ? "Entre com sua conta" : "Cadastre-se na plataforma"}
        </h1>

        <AuthInput rotulo="E-mail" obrigatorio valor={email} tipo="email" valorMudou={setEmail} />
        <AuthInput rotulo="Senha" obrigatorio valor={senha} tipo="password" valorMudou={setSenha} />

        <button
          onClick={submeter}
          className={`
            w-full rounded-lg px-4 py-3 mt-6
            bg-indigo-500 hover:bg-indigo-400 text-white
          `}
        >
          {modo === AuthEnum.LOGIN ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={submeter}
          className={`
          w-full rounded-lg px-4 py-3
          bg-red-500 hover:bg-red-400 text-white `}
        >
          Entrar com o Google
        </button>
      </div>
    </div>
  );
}
