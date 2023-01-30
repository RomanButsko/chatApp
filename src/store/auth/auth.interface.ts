import { IUser } from '../../types/user'

export interface IAuth {
    isLoading: boolean
    user: IUser | null
    error: string
}
