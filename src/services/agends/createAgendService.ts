import {prisma} from '../../database';
import {Client, IAgend} from '../../types/types';

const CreateAgendService = async ({
	service,
	date,
	status,
	user_id,
	client_id
}: IAgend) => {
	if (!service || !date || !status) {
		throw new Error('All fields are required');
	}
	const agend = await prisma.agend.create({
		data: {
			service: service,
			date: date,
			status: status,
			client_id: client_id,
			user_id: user_id
		}
	});

	if (!agend) {
		throw new Error('Não foi possível criar agendamento');
	}

	return agend;
};

export {CreateAgendService};
