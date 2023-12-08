import { number, string } from "prop-types";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardComponent({ id, title, description, category }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Link to={`/detail/${id}`}>Card Link</Link>
      </Card.Body>
    </Card>
  );
}

CardComponent.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  category: string.isRequired,
};


export default CardComponent