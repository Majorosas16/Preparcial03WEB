import Card from "../components/Card";
import { useEffect, useState } from "react";
import useApi from "../Hook/useApi";
import { saveApi, toggleUserType } from "../redux/slices/RickMortySlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { RoutesType } from "../Types/RoutesType";

function Home() {
  const [search, setSearch] = useState("");
  const { RickMorty, loading } = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const digiLocal = useSelector(
    (state: RootState) => state.rickMorty.apiRickMorty
  );

  const userType = useSelector((state: RootState) => state.rickMorty.userType);

  console.log(digiLocal); // ci

  useEffect(() => {
    if (RickMorty.length > 0 && digiLocal.length === 0) {
      dispatch(saveApi(RickMorty));
    }
  }, [RickMorty, digiLocal, dispatch]);

  // Filtro de busqueda
  const filtered = digiLocal.filter((local) =>
    local.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Cargando.....</p>;

  return (
    <>
      <p>*Actualmente eres: {userType}*</p>

      <button onClick={() => dispatch(toggleUserType())}>
        Cambiar a {userType === "admin" ? "usuario" : "administrador"}
      </button>

      {userType === "admin" && (
        <button onClick={() => navigate(RoutesType.create)}>Crear Nuevo</button>
      )}

      <h2> ↓ Search characters here ↓</h2>
      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

        {/* Render del filtro de busqueda */}
      {filtered.map((local, i) => (
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

export default Home;
