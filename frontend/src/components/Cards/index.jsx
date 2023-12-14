import { number, string } from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardComponent({ id, title, description, category }) {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
				<Card.Text>{description}</Card.Text>

				{/* <Link role='navigateCardDetail' to={`/detail/${id}`}>Card Link</Link> */}
				<Link role='navigateCardDetail' to={`/test-page`}>Card Link</Link>
				{/* <a href={`/detail/${id}`}>Card Link</a> */}
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


export default CardComponent;