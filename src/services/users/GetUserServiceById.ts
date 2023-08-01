import {prisma} from '../../database';

const GetUserserviceById = async ({user_id}) => {
	const clients = await prisma.user.findFirst({
		where: {
			id: user_id
		},
		select: {
			id: true,
			name: true,
			email: true,
			role: true,
			createdAt: true,
			updateAt: true
		}
	});

	if (!clients) {
		throw new Error('Not possible get client');
	}

	return clients;
};

export {GetUserserviceById};
