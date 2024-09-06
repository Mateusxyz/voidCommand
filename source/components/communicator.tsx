import React from 'react';
import { Box, Text } from 'ink';

export const RadioCommunicator = () => {
	return (
		<Box flexDirection="column" padding={1} margin={2} borderColor={'green'} borderStyle={'round'} justifyContent='center' alignItems='center' height={20}>
				<Box flexDirection="column">
					<Text color="yellow">[Rádio Comunicador]</Text>
					<Text color="white">Mensagem recebida: "Alfa, Bravo, Charlie..."</Text>
					<Text color="white">Status: Conectado</Text>
				</Box>
		</Box>
	);
};
