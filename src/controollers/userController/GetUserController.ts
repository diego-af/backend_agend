import {Request, Response} from 'express';
import {GetUsersService} from '../../services/users/GetUsersService';

const GetUsersControllers = async (req: Request, res: Response) => {
	const users = await GetUsersService();

	res.status(201).json({
		sucess: true,
		data: users
	});
};

export {GetUsersControllers};
