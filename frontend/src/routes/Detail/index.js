import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useParams } from 'react-router-dom';

const API_DETAIL_PRODUCT = 'https://dummyjson.com/product';

const DetailPage = () => {

	return <div>detail page</div>
	// const { idCar } = useParams();
	// const [dataDetailProduct, setDataDetailProduct] = useState(null);
	// const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	if (idCar) {
	// 		setLoading(true);
	// 		fetch(`${API_DETAIL_PRODUCT}/${idCar}`)
	// 			.then((res) => res.json())
	// 			.then((response) => {
	// 				setDataDetailProduct(response);
	// 				setLoading(false);
	// 			});
	// 	}
	// }, [idCar]);

	// if (loading && !dataDetailProduct) return <Spinner />;

	// return (
	// 	<Container>
	// 		<div>Detail Page</div>
	// 		<p>{dataDetailProduct?.title}</p>
	// 		<p>{dataDetailProduct?.description}</p>
	// 		<p>{dataDetailProduct?.price}</p>
	// 		<p>{dataDetailProduct?.rating}</p>
	// 		<p>{dataDetailProduct?.brand}</p>
	// 		<p>{dataDetailProduct?.category}</p>
	// 	</Container>
	// );
};

export default DetailPage;

// staet & props
// react router dom@6.2
// routing
// handle direction from page A to B
// use Effect
// handling API integration
