// import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from '..';

describe('<Button />', ()=> {
	const props = {
		// type:'submit', 
		color: 'blue',
		onClick: jest.fn(), 
		disabled: false
	};

	test('should render button component correctly',  ()=> {
		render(<Button {...props}>Submit</Button>);

		expect(screen.getByText(/submit/i)).toBeInTheDocument();
	});

	test('should be able to call onClick by using callback props', async () => {
		render(<Button {...props}>Submit</Button>);

		await userEvent.click(await screen.findByTestId('buttonId'));
		expect(props.onClick).toHaveBeenCalled();
	});

	test('should not be able to click when disabled', async () => {
		const disabledProps = {
			...props, 
			disabled: true
		};
        
		render(<Button {...disabledProps}>Submit</Button>);

		await userEvent.click(await screen.findByTestId('buttonId'));
		expect(props.onClick).toHaveBeenCalledTimes(0);
	});
});