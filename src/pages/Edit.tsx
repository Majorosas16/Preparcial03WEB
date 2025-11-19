import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editCharacter } from "../redux/slices/RickMortySlice";
import type { RootState } from "../redux/store";
import { useState, useEffect } from "react";
import type { RickMorty } from "../Types/RickMortyType";
import { RoutesType } from "../Types/RoutesType";
import useApi from "../Hook/useApi";

const EditForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [speciesInput, setSpeciesInput] = useState("");
  const [statusInput, setStatusInput] = useState("");

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useApi();

  const rickMorty = useSelector(
    (state: RootState) => state.rickMorty.apiRickMorty
  );

  // Personaje a editar
  const toEdit = rickMorty.find((c) => c.id.toString() === id);

  // Rellena los campos del formulario con los datos del personaje a editar
  useEffect(() => {
    if (toEdit) {
      setNameInput(toEdit.name);
      setStatusInput(toEdit.status || "");
      setSpeciesInput(toEdit.species || "");
    }
  }, [toEdit]);

  const handleEdit = () => {
    if (!toEdit) return;

    const updatedCharacter: RickMorty = {
      ...toEdit,
      name: nameInput,
      status: statusInput,
      species: speciesInput,
    };
    dispatch(editCharacter(updatedCharacter));
    navigate(RoutesType.home);
  };

  if (loading) return <p>Cargando editar.....</p>;

  return (
    <div>
      <button onClick={() => navigate(RoutesType.home)}>Back to home</button>

      {/* Detalle de que aparezca la imagen del personaje que se va a editar */}
      {toEdit ? (
        <img src={toEdit.image} alt={toEdit.name} />
      ) : (
        <h1>Personaje no encontrado</h1>
      )}

      <input
        placeholder="Ingresa el nombre"
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <input
        placeholder="Ingresa el status"
        type="text"
        value={statusInput}
        onChange={(e) => setStatusInput(e.target.value)}
      />
      <input
        placeholder="Ingresa la especie"
        type="text"
        value={speciesInput}
        onChange={(e) => setSpeciesInput(e.target.value)}
      />
      <button type="button" onClick={handleEdit}>
        Guardar Cambios
      </button>
    </div>
  );
};

export default EditForm;
