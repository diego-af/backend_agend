export interface Client {
	name: string;
	email: string;
	telefone: string;
	role: string;
}
export interface ClientUpdate {
	id: number;
	name: string;
	email?: string;
	telefone: string;
	role: string;
}
export interface IUser {
	name: string;
	email: string;
	password: string;
	role: string;
}

export interface IUserUpdate {
	id: number;
	name: string;
	email?: string;
	password: string;
	role: string;
}
export interface IAgend {
	service: string;
	date: string;
	status: boolean;
	user_id?: number;
	client_id?: number;
}

export interface UpdateAgendClient extends IAgend {
	id: number;
}

export interface Login {
	email: string;
	password: string;
}

export interface DeleteProps {
	id: number;
}
