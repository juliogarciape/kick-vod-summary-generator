import axios from 'axios';

export const countTsSegments = async (url) => {
	try {
		const response = await axios.get(url);
		const data = response.data;
		const tsSegments = data
			.split('\n')
			.filter((line) => line.trim().endsWith('.ts'));
		return tsSegments.length - 1;
	} catch (error) {
		console.error('Error al obtener la lista de reproducción:', error);
	}
};
