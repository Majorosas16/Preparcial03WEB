import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/slices/userSlice";
import type { UserType } from "../Types/UserType";
import { useNavigate } from "react-router-dom";
import { RoutesType } from "../Types/RoutesType";

const CreateUser = () => {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const create: UserType = {
      id: Math.floor(Math.random() * 10000),
      name: user,
      role: role,
    };

      dispatch(saveUser(create));
      navigate(RoutesType.home);

    setUser("");
    setRole(""); // también puedes resetear el rol si quieres
  };

  return (
    <>
      <form onSubmit={(e) => sendForm(e)}>
        <input
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"
          value={user}
        />
        <h2>Elige un rol</h2>
          <input
            type="radio"
            name="role"
            value="user"
            checked={role === "user"}
            onChange={(e) => setRole(e.target.value)}
          />
          User
 
          <input
            type="radio"
            name="role"
            value="admin"
            checked={role === "admin"}
            onChange={(e) => setRole(e.target.value)}
          />
          Admin

        <br />
        <button type="submit">Crear usuario</button>
      </form>
    </>
  );
};

export default CreateUser;
