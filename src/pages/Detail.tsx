import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { RoutesType } from "../Types/RoutesType";
import useApi from "../Hook/useApi";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { loading } = useApi();

  const rickMorty = useSelector(
    (state: RootState) => state.rickMorty.apiRickMorty
  );

  // Personaje a editar
  const toEdit = rickMorty.find((c) => c.id.toString() === id);

  if (loading) return <p>Cargando editar.....</p>;

  return (
    <div>
      <button onClick={() => navigate(RoutesType.home)}>Back to home</button>

      {toEdit && (
        <Card
          id={toEdit.id}
          name={toEdit.name}
          species={toEdit.species}
          status={toEdit.status}
          image={toEdit.image}
          gender={toEdit.gender}
          created={toEdit.created}
        />
      )}
    </div>
  );
};

export default Detail;
