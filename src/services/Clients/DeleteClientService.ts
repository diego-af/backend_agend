import {prisma} from '../../database';

const DeletClientService = async ({id}) => {
	const clientDelete = await prisma.client.findFirst({
		where: {
			id: Number(id)
		}
	});

	if (!clientDelete) {
		throw new Error('Not client found');
	}
	const clientDeleteTwo = await prisma.client.delete({
		where: {
			id: Number(id)
		}
	});
	return clientDeleteTwo;
};

export {DeletClientService};
