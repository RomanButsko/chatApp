import { useAppSelector } from './useSelector'

export const useUserExists = () => {
    const user = useAppSelector((state) => state.auth.user)

    return Boolean(user)
}
