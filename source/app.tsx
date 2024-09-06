import React from 'react';
import { RadioCommunicator } from './components/communicator.js';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	console.log(name)
	return (
		<RadioCommunicator/>
	);
}