import {prisma} from '../../database';
import {Client} from '../../types/types';

const CreateServiceClient = async ({name, email, telefone, role}: Client) => {
	const emailExist = await prisma.client.findUnique({
		where: {
			email: email
		}
	});

	if (emailExist) {
		throw new Error('User already exists!');
	}
	const client = await prisma.client.create({
		data: {
			name: name,
			email: email,
			role: role,
			telefone: telefone
		}
	});

	return client;
};

export {CreateServiceClient};
