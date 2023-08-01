import {prisma} from '../../database';

const GetAgendService = async () => {
	const agends = await prisma.agend.findMany({
		include: {
			client: true,
			user: true
		}
	});

	if (!agends) {
		throw new Error('Not possible get agends');
	}

	return agends;
};

export {GetAgendService};
