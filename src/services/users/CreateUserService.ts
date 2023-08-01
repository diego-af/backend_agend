import {error} from 'console';
import {prisma} from '../../database';
import {Client, IUser} from '../../types/types';
import {hash} from 'bcryptjs';

const CreateUserService = async ({name, email, password, role}: IUser) => {
	const emailUser = await prisma.user.findUnique({
		where: {
			email: email
		}
	});

	if (emailUser) {
		throw new Error('User already exists!');
	}

	const passwordHash = await hash(password, 8);
	const client = await prisma.user.create({
		data: {
			name: name,
			email: email,
			password: passwordHash,
			role: role
		},
		select: {
			name: true,
			email: true,
			role: true
		}
	});

	return client;
};

export {CreateUserService};
