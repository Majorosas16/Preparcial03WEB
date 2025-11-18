import { useDispatch } from "react-redux";
// import { saveDigi } from "../redux/slices/DigiSlice";
import type { RickMorty } from "../Types/RickMortyType";

export const Card = ({ id, name, status, specie, image }: RickMorty) => {
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(saveDigi({ id, name, image }));
  // };

  return (
    <div className="card">
      <p>{id}</p>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{status}</p>
      <p>{specie}</p>

      <div className="card-buttons">
        <button className="btnEdit">Editar</button>
        <button className="btnDelete">Eliminar</button>
      </div>
    </div>
  );
};

export default Card;
