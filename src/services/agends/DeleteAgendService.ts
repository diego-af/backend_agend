import {prisma} from '../../database';

const DeletAgendService = async ({id}) => {
	const deleteAgend = await prisma.agend.delete({
		where: {
			id: id
		}
	});

	if (!deleteAgend) {
		throw new Error('Not client found');
	}
	return deleteAgend;
};

export {DeletAgendService};
