import {Request, Response} from 'express';
import {LoginService} from '../../services/LoginService/LoginService';

const LoginController = async (req: Request, res: Response) => {
	const {email, password} = req.body;

	const login = await LoginService({email, password});

	return res.status(201).json({
		sucess: true,
		data: login
	});
};

export {LoginController};
