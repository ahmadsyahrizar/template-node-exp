import { Navigate } from "react-router-dom";
import { node } from "prop-types";

const PrivateRoutes = ({ children }) => {
  // nantinya di real case login ini akan hit api ya teman2. 
  const isLogin = localStorage.getItem("token");

  if (!isLogin) return <Navigate to="/login" />;

  return children;
};

PrivateRoutes.propTypes = {
  children: node.isRequired,
};

export default PrivateRoutes;
