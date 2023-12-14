import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
	const navigate = useNavigate();
	const login = useGoogleLogin({
		onSuccess: async (tokenResp) => {
			const response = await fetch('http://localhost:8000/v1/users/googleAuth', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${tokenResp.access_token}`,
				},
			});

			const resJson = await response.json();

			console.log({response: resJson});


			if(resJson.data) {
				navigate('/admin/car/list');
			}
		},
	});

	const handleLogin = () => {
		login();
	};

	return (
		<Container>
			<div>This is Login Page</div>

			<Button onClick={handleLogin}>Sign In With Google</Button>
		</Container>
	);
};

export default Login;
