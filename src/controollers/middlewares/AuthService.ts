import {Payload} from '@prisma/client/runtime/library';
import {Request, Response, NextFunction} from 'express';

import {verify} from 'jsonwebtoken';

const AuthService = (req: Request, res: Response, next: NextFunction) => {
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res.status(401).json({error: 'Unauthorized'});
	}

	const [, token] = authToken.split(' ');

	try {
		const {sub} = verify(token, process.env.JWT_SECRET);

		req.user_id = Number(sub);
		return next();
	} catch (error) {
		return res.status(401).json({error: 'Unauthorized'});
	}
};

export {AuthService};
