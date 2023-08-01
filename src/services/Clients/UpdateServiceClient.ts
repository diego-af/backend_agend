import {prisma} from '../../database';
import {ClientUpdate} from '../../types/types';

const UpdateServiceClient = async ({
	id,
	name,
	email,
	telefone,
	role
}: ClientUpdate) => {
	const clientUpdate = await prisma.client.update({
		where: {
			id: id
		},
		data: {
			name: name,
			telefone: telefone,
			role: role
		},
		select: {
			name: true,
			email: true,
			telefone: true,
			role: true
		}
	});

	if (!clientUpdate) {
		throw new Error('Not possible update');
	}

	return clientUpdate;
};

export {UpdateServiceClient};
