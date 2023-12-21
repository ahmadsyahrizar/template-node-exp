import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './../App.tsx';
import DetailPage from './Detail';
// import DetailPage from "./TestPage";
import Layout from '../components/Layout';
import AdminRoute from './Admin/routes';
import Login from './Login';
import PrivateRoutes from './../components/PrivateRoutes';
import AdminLayout from '../components/AdminLayout/index.tsx';

const RouterApp = () => {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Routes>
					{/* Public Routes */}
					<Route
						path="/"
						element={
							<Layout>
								<App />
							</Layout>
						}
					/>

					{/* <Route path="/test-page" element={<TestPage />} /> */}

					<Route
						path="/detail/:idCar"
						element={
							<Layout>
								<DetailPage />
							</Layout>
						}
					/>
					<Route path="/login" element={<Login />} />

					{/* Private Routes */}
					<Route
						path="/admin/*"
						element={
							<PrivateRoutes>
								<AdminLayout>
									<AdminRoute />
								</AdminLayout>
							</PrivateRoutes>
						}
					/>
				</Routes>
			</React.Fragment>
		</BrowserRouter>
	);
};

export default RouterApp;
