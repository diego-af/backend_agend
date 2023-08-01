import {prisma} from '../../database';
import {IAgend, UpdateAgendClient} from '../../types/types';

const UpdateAgendService = async ({
	id,
	service,
	date,
	status,
	user_id,
	client_id
}: UpdateAgendClient) => {
	const agendUpdate = await prisma.agend.update({
		where: {
			id: id
		},
		data: {
			service: service,
			date: date,
			status: status,
			user_id: user_id,
			client_id: client_id
		},
		select: {
			service: true,
			date: true,
			status: true,
			user_id: true,
			client_id: true
		}
	});

	if (!agendUpdate) {
		throw new Error('Not possible update');
	}

	return agendUpdate;
};

export {UpdateAgendService};
