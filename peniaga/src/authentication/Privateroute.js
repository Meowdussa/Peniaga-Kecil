// import React from "react";
// import { Route, Redirect } from "react-router-dom";


// const Privateroute = ({
//   isAuth: validateToken,
//   component: Ownerprofile,
//   ...rest
// }) => {
//   return (
//     <div>
//       <Route
//         {...rest}
//         render={(props) => {
//           if (isAuth) return <Ownerprofile />;
//           return <Redirect to={{pathname: '/', state: {from: props.location}}}/>;
//         }}
//       />
//     </div>
//   );
// };
// export default Privateroute;
