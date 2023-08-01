import {prisma} from '../../database';

const GetClientsService = async () => {
	const clients = await prisma.client.findMany({
		include: {
			agends: true
		}
	});

	if (!clients) {
		throw new Error('Not possible get clients');
	}

	return clients;
};

export {GetClientsService};
