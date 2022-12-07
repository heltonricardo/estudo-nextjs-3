import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const contexto = useAppData();

  return (
    <Layout titulo="Notificações" subtitulo="Subtítulo">
      Conteúdo
    </Layout>
  );
}
