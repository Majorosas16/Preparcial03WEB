import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveRickMorty } from "../redux/slices/RickMortySlice";
import type { RickMorty } from "../Types/RickMortyType";
import { useNavigate } from "react-router-dom";
import { RoutesType } from "../Types/RoutesType";

const CreateForm = () => {
  const [imgInput, setImgInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [speciesInput, setSpeciesInput] = useState("");
  const [statusInput, setStatusInput] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    const create: RickMorty = {
      id: Math.floor(Math.random() * 10000),
      image: imgInput,
      name: nameInput,
      species: speciesInput,
      status: statusInput,
    };
    e.preventDefault();
    dispatch(saveRickMorty(create));
    setImgInput("");
    setNameInput("");
    setSpeciesInput("");
    setStatusInput("");
  };

  return (
      <>
          <button onClick={()=>navigate(RoutesType.home)} >Back home</button>
      <form onSubmit={(e) => sendForm(e)}>
        <input
          onChange={(e) => setImgInput(e.target.value)}
          placeholder="Ingresa una imagen del personaje"
          value={imgInput}
        />
        <input
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Ingresa un nombre"
          value={nameInput}
        />
        <input
          onChange={(e) => setSpeciesInput(e.target.value)}
          placeholder="Ingresa una especie del personaje"
          value={speciesInput}
        />
        <input
          onChange={(e) => setStatusInput(e.target.value)}
          placeholder="Ingresa un estado del personaje"
          value={statusInput}
        />
        <button type="submit">Agregar personaje</button>
      </form>
    </>
  );
};

export default CreateForm;
