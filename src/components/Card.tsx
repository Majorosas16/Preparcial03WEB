import { useDispatch, useSelector } from "react-redux";
import type { RickMorty } from "../Types/RickMortyType";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { RoutesType } from "../Types/RoutesType";
import { deleteCharacter } from "../redux/slices/RickMortySlice";

export const Card = ({ id, name, status, species, image }: RickMorty) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const userType = useSelector((state: RootState) => state.rickMorty.userType);

  const userList = useSelector((state: RootState) => state.user.user);
  console.log(userList);

  const currentUser = userList[0]; // tomo el primer usuario

  const handleEdit = () => {
    // En resumidas es así: navigate("edit/" + id); (yo que puse a agregar tipados por eso se ve raro);
    navigate(RoutesType.edit.replace(":id", String(id)));
  };

  const handleDelete = () => {
    dispatch(deleteCharacter(id));
  };

  return (
    <div className="card">
      <p>{id}</p>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>{species}</h3>
      <p>{status}</p>

      <div className="card-buttons">
        {/* Mostrar botones solo si el userType es "admin" */}
        {currentUser.role === "admin" && (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
