import { IUser } from './user'

export interface IMessage {
    id: number
    title: string
    text: string
    createdAt: Date
    user: Pick<IUser, 'id' | 'name'>
    toUser?: any
}

export interface IMessageCreate {
    title: string
    text: string
    userId: number;
    toUserId: number;
}

export type IMessages = Omit<IMessage, 'user' | 'toUser'>