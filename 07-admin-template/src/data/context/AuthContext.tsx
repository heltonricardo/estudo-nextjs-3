import Cookies from "js-cookie";
import router from "next/router";
import { createContext, ReactElement, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";

interface Props {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
}

async function normalizarUsuario(usuarioFirebase: firebase.User): Promise<Usuario> {
  return {
    uid: usuarioFirebase.uid,
    email: usuarioFirebase.email || "",
    nome: usuarioFirebase.displayName || "",
    token: await usuarioFirebase.getIdToken(),
    provedor: usuarioFirebase.providerData[0]?.providerId || "",
    imagemUrl: usuarioFirebase.photoURL || "",
  };
}

function gerirCookie(isLogado: boolean) {
  const COOKIE_NAME = "admin-template-auth";
  if (isLogado) {
    Cookies.set(COOKIE_NAME, COOKIE_NAME, { expires: 7 });
  } else {
    Cookies.remove(COOKIE_NAME);
  }
}

export const AuthContext = createContext<Props>({});

export function AuthProvider(props: { children: ReactElement }) {
  const [usuario, setUsuario] = useState<Usuario>();
  const [isCarregando, setCarregando] = useState<boolean>(true);

  async function configurarSessao(usuarioFirebase: firebase.User | null) {
    if (usuarioFirebase) {
      const usuario = await normalizarUsuario(usuarioFirebase);
      setUsuario(usuario);
      gerirCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(undefined);
      gerirCookie(false);
      setCarregando(false);
      return undefined;
    }
  }

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    await configurarSessao(resp.user);
    router.push("/");
  }

  useEffect(() => {
    const cancelarObserver = firebase.auth().onIdTokenChanged(configurarSessao);
    return () => cancelarObserver();
  }, []);

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
