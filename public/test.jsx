// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { loginUser, logoutUser } from '../actions/authActions';

// const YourComponent = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     const credentials = {
//       username: 'example',
//       password: 'password',
//     };
//     dispatch(loginUser(credentials));
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         <>
//           <p>Vous êtes connecté(e).</p>
//           <button onClick={handleLogout}>Déconnexion</button>
//         </>
//       ) : (
//         <>
//           <p>Vous n'êtes pas connecté(e).</p>
//           <button onClick={handleLogin}>Connexion</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default YourComponent;