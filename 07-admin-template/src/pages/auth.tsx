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
    <div className="flex justify-center items-center h-screen">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          className="h-screen w-full object-cover"
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3 transition-all">
        <h1 className="text-3xl font-bold mb-5">
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
          {modo === AuthEnum.LOGIN ? "Entrar com o Google" : "Cadastrar com o Google"}
        </button>

        {modo === AuthEnum.LOGIN ? (
          <p className="mt-8 text-center">
            É sua primeira vez aqui?{" "}
            <span
              onClick={() => setModo(AuthEnum.CADASTRO)}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              Crie uma conta
            </span>
          </p>
        ) : (
          <p className="mt-8 text-center">
            Já possui conta?{" "}
            <span
              onClick={() => setModo(AuthEnum.LOGIN)}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              Faça login
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
