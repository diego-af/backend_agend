import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {router} from './routes/';

const app = express();
const port = process.env.PORT || 9000;
app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof Error) {
		res.status(403).json({
			error: err.message
		});
	}

	return res.status(500).json({
		status: 'error',
		message: 'Internal server error'
	});
});
app.listen(port, () => {
	console.log('listening on port 9000');
});
