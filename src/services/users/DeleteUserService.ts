import {prisma} from '../../database';

const DeletUserService = async ({id}) => {
	const deleteUser = await prisma.user.delete({
		where: {
			id: id
		}
	});

	if (!deleteUser) {
		throw new Error('Not client found');
	}
	return deleteUser;
};

export {DeletUserService};
