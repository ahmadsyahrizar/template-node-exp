import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useNavigate, Routes, Route } from "react-router-dom";
import CarList from "./CarList";
import CreateCar from "./CreateCar";

const AdminRoutes = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  console.log("check page");

  return (
    <Container>
      <div>admin routes</div>
      <Routes>
        <Route path="car/list" element={<CarList />} />
        <Route path="car/create" element={<CreateCar />} />
      </Routes>
      {/* <Button onClick={handleLogout}>Logout</Button> */}
    </Container>
  );
};

export default AdminRoutes;
