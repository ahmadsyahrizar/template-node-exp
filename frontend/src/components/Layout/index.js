import { node } from "prop-types";
import Menu from "../MenuBar";
import "./App.css";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Menu />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
