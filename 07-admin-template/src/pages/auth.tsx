import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Auth() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <h1>Autenticação</h1>
      <AuthInput rotulo="E-mail" obrigatorio valor={email} tipo="email" valorMudou={setEmail} />
      <AuthInput rotulo="Senha" obrigatorio valor={senha} tipo="password" valorMudou={setSenha} />
    </div>
  );
}
