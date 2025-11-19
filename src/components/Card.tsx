import { useDispatch, useSelector } from "react-redux";
import type { RickMorty } from "../Types/RickMortyType";
import type { RootState } from "../redux/store";

export const Card = ({ id, name, status, species, image }: RickMorty) => {
  const dispatch = useDispatch();
  const userType = useSelector((state: RootState) => state.rickMorty.userType);

  // const handleClick = () => {
  //   dispatch(saveDigi({ id, name, image }));
  // };

  return (
    <div className="card">
      <p>{id}</p>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>{species}</h3>
      <p>{status}</p>

      <div className="card-buttons">
        {userType === "admin" && (
          <>
            <button className="btnEdit">Editar</button>
            <button className="btnDelete">Eliminar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
