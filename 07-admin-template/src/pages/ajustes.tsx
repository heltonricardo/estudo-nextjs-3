import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Ajustes() {
  const { alternarTema } = useAppData();

  return (
    <Layout titulo="Ajustes" subtitulo="Subtítulo">
      <button onClick={alternarTema}>Trocar Tema</button>
    </Layout>
  );
}
