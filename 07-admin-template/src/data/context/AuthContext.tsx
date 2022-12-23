import router from "next/router";
import { createContext, ReactElement, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";

interface Props {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
}

async function normalizarUsuario(usuarioFireBase: firebase.User): Promise<Usuario> {
  const tokenFireBase = await usuarioFireBase.getIdToken();
  return {
    uid: usuarioFireBase.uid,
    email: usuarioFireBase.email || "",
    nome: usuarioFireBase.displayName || "",
    token: tokenFireBase,
    provedor: usuarioFireBase.providerData[0]?.providerId || "",
    imagemUrl: usuarioFireBase.photoURL || "",
  };
}

export const AuthContext = createContext<Props>({});

export function AuthProvider(props: { children: ReactElement }) {
  const [usuario, setUsuario] = useState<Usuario>();

  async function loginGoogle() {
    console.log("Login com Google");
    router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
