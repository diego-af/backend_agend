import {error} from 'console';
import {prisma} from '../../database';
import {Client, IUser, IUserUpdate} from '../../types/types';
import {hash} from 'bcryptjs';

const UpdateUserService = async ({
	id,
	name,
	email,
	password,
	role
}: IUserUpdate) => {
	const passwordHash = await hash(password, 8);
	const user = await prisma.user.update({
		where: {
			id: id
		},
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

	if (!user) {
		throw new Error('Not possible update');
	}

	return user;
};

export {UpdateUserService};
