import {prisma} from '../../database';
import {Login} from '../../types/types';
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';

const LoginService = async ({email, password}: Login) => {
	if (!email || !password) {
		throw new Error('Fields are required');
	}

	const user = await prisma.user.findUnique({
		where: {
			email: email
		},

		include: {
			agends: true
		}
	});

	if (!user) {
		throw new Error('Not possible login');
	}

	const ecnriptedPassword = await compare(password, user?.password);

	if (!ecnriptedPassword) {
		throw new Error('Senha invalida');
	}

	const token = sign(
		{
			name: user?.name,
			email: user?.email
		},
		process.env.JWT_SECRET,
		{
			subject: user.id.toString(),
			expiresIn: '30d'
		}
	);

	return {
		id: Number(user?.id),
		name: user?.name,
		email: user?.email,
		token: token
	};
};

export {LoginService};
