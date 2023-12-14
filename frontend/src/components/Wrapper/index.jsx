import { useState } from 'react';
// import Input from "../Input";
// import Button from "../Button";
import List from '../List';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';

// import styFontSize, { styWrapperPadding, styWrapper } from "./styles";

const Wrapper = () => {
	const [value, setValue] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleOnChange = (e) => {
		setValue(e.target.value);
	};

	const handleOnClick = () => {
		const findData = todoList.includes(value);

		if (!value.length) {
			setError('Please fill the input form before you submit!');
			return;
		}

		if (findData) {
			setError('you have similar activity, please add another');
			return;
		}

		if (!findData) {
			setLoading(true);

			setTimeout(() => {
				setTodoList((prevState) => [...prevState, value]);
				setLoading(false);
			}, 2000);
		}
	};

	const handleOnDelete = (paramVal) => {
		const filterData = todoList.filter((val) => val !== paramVal);
		setTodoList(filterData);
	};

	const buttonText = loading ? 'please wait' : 'Add New List';

	return (
		<>
			<div style={{ margin: '1em' }}>
				<Form.Label htmlFor="inputPassword5">Input Activity</Form.Label>
				<Form.Control onChange={handleOnChange} type="text" id="activity" />
				{error && (
					<Form.Text style={{ color: '#ffffff' }} id="activityFormText">
						{error}
					</Form.Text>
				)}
			</div>

			<Button disabled={loading} onClick={handleOnClick}>
				{buttonText}
			</Button>

			{loading ? (
				<Spinner animation="border" />
			) : (
				<List data={todoList} handleOnDelete={handleOnDelete} />
			)}
		</>
	);
};

// How to handle Delete in each row when clicked.

export default Wrapper;
