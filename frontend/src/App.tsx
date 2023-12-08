
import React, { useEffect, useState } from "react";
import "./components/Layout/App.css";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "./components/Cards";
import Container from "react-bootstrap/esm/Container";

const API = "https://dummyjson.com/products";

interface DataProductsType {
  products: Array<{
    id: number;
    title: string;
    description: string;
    category: string;
  }>;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataProductsType>({
    products: [],
  });

  useEffect(() => {
    setLoading(true);

    if (!data.products.length) {
      fetch(API)
        .then((res) => res.json())
        .then((results) => {
          setData(results);
          setLoading(false);
        });
    }

    // setLoading(false)
  }, [data]);

  // [] => effect akan dijalanka sekali saja.
  // [counter, isToggle] => effect akan dijalankan ketika counter atau isToggle datanya berubah.
  // tidak ada array => selalu jalan

  return (
    <div className="App-header">
      {loading && !data && <Spinner />}

      <Container>
        <Row>
          {data.products.map(({ id, title, description, category }) => {
            return (
              <Col key={id}>
                <Card
                  id={id}
                  title={title}
                  description={description}
                  category={category}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
