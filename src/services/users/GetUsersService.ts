import {prisma} from '../../database';

const GetUsersService = async () => {
	const user = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			email: true,
			role: true,

			agends: true
		}
	});

	if (!user) {
		throw new Error('Not possible get user');
	}

	return user;
};

export {GetUsersService};
