import Card from "../components/Card";
import useApi from "../Hook/useApi";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

function Fav() {
  const { loading } = useApi();
  const navigate = useNavigate();

  const digiLocal = useSelector(
    (state: RootState) => state.rickMorty.favorites
  );
  console.log(digiLocal); // ci

//   useEffect(() => {
//     if (RickMorty.length > 0 && digiLocal.length === 0) {
//       dispatch(saveApi(RickMorty));
//     }
//   }, [RickMorty, digiLocal, dispatch]);


  if (loading) return <p>Cargando.....</p>;

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>

      {/* Render del filtro de busqueda */}
      {digiLocal.map((local, i) => (
        <Card
          id={local.id}
          name={local.name}
          species={local.species}
          status={local.status}
          image={local.image}
          key={i}
        />
      ))}
    </>
  );
}

export default Fav;
