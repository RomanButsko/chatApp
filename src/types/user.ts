export interface IUser {
    id: number
    name: string
    messages: any
    receivedMessage: any
}

export interface IUsersNames {
    name: string;
}

export type IUserQuery = IUsersNames & Pick<IUser, 'id'>