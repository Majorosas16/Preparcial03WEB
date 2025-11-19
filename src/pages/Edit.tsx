import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editCharacter } from "../redux/slices/RickMortySlice";
import type { RootState } from "../redux/store";
import { useState, useEffect } from "react";
import type { RickMorty } from "../Types/RickMortyType";
import { RoutesType } from "../Types/RoutesType";

const EditForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [speciesInput, setSpeciesInput] = useState("");
  const [statusInput, setStatusInput] = useState("");

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const rickMorty = useSelector(
    (state: RootState) => state.rickMorty.apiRickMorty
  );
  console.log(rickMorty);

  const toEdit = rickMorty.find((c) => c.id.toString() === id);

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

  return (
    <div>
      <button onClick={() => navigate(RoutesType.home)}>Back to home</button>
      {toEdit ? (
          <img src={toEdit.image} alt={toEdit.name} />
      ) : (
        <h1>Personaje no encontrado</h1>
      )}

      <input
        placeholder="Ingresa el name"
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
        placeholder="Ingresa la specie"
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
