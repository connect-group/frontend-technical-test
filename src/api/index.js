export const getData = async (id = '') => {
	const res = await fetch(`http://localhost:9988/api/vehicle/${id}`, {
		method: 'GET'
	});

	const vehicle = await res.json();

	return vehicle;
};
