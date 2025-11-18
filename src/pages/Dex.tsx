import useDigi from "../Hook/useApi";
// import { saveDigi } from "../redux/slices/DigiSlice";
import { useSelector } from "react-redux";
import DigiCard from "../components/Card";
import type { RootState } from "../redux/store";

const DexPage = () => {
  const { loading } = useDigi();

  const digiAddLocal = useSelector((state: RootState) => state.digi.digiFav);
  console.log(digiAddLocal, "Digi Agregados");

  return (
    <div className="page-container">
      <h1>Digimones Agregados</h1>

      {loading && <p className="status-message">Cargando...</p>}

      <div className="digi-list">
        {digiAddLocal.map((digi) => (
          <DigiCard
            key={digi.id}
            id={digi.id}
            name={digi.name}
            image={digi.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DexPage;
