// use emotion to serialize our css in js styles

import { css } from '@emotion/css';

const colorMapping = {
	primary: 'aquamarine',
	danger: 'red'
};

export const styButton = (color) => css({
	backgroundColor: colorMapping[color],
	padding: '0.5em',
	borderRadius: '5px',
	border: 'unset',
	margin: '1em',
	color: '#000000'
});
