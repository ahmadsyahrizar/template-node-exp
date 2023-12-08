// will do after break about form usage;

import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const CreateCar = () => {
  const [dataForm, setFormData] = useState({});

  // console.log({ dataForm });

  // const handleFormValue = ({ prop, value }) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [prop]: value,
  //   }));
  // };

  const post = (payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(payload);
      }, 2000);
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const carName = e.target.carName.value;
    const harga = e.target.harga.value;
    const availability = e.target.availability.value;
    const year = e.target.year.value;

    const payload = {
      carName,
      harga,
      availability,
      year,
    };

    const response = await post({ payload });
    console.log({ response });
  };

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input name="carName" placeholder="car name" />
        </div>

        <div>
          <input name="harga" placeholder="harga" />
        </div>

        <div>
          <input name="availability" placeholder="availability" />
        </div>

        <div>
          <input name="year" placeholder="year" />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default CreateCar;
