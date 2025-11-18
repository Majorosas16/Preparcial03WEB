// // import { useNavigate } from "react-router";
// import useDigi from "../Hook/useApi";
// import { saveDigiApi } from "../redux/slices/DigiSlice";
// import { useSelector, useDispatch } from "react-redux";
// import DigiCard from "../components/Card";
// import type { RootState } from "../redux/store";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { RoutesType } from "../Types/RoutesType";

// const FieldPage = () => {
//   const navigate = useNavigate();
//   const { RickMorty, loading } = useDigi();
//   const dispatch = useDispatch();

//   const digiLocal = useSelector((state: RootState) => state.digi.digi);
//   console.log(digiLocal, "Digi Locales");

//   useEffect(() => {
//     if (RickMorty.length > 0 && digiLocal.length === 0) {
//       dispatch(saveDigiApi(RickMorty));
//     }
//   }, [RickMorty, digiLocal, dispatch]);

//   const handleClick = () => {
//     navigate(RoutesType.dex);
//   };

//   return (
//     <div className="page-container">
//       <button onClick={handleClick}>Carrito Digimones</button>
//       <h1>Digimones</h1>

//       {loading && <p className="status-message">Cargando...</p>}

//       <div className="digi-list">
//         {digiLocal.map((digi) => (
//           <DigiCard
//             key={digi.id + digi.name}
//             id={digi.id}
//             name={digi.name}
//             image={digi.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FieldPage;
