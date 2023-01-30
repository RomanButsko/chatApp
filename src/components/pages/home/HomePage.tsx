import style from './HomePage.module.sass'
import { ModalEntry } from '../../modalEntry/ModalEntry'
import { useAppSelector } from '../../../hooks/useSelector'
import Letters from '../../../letters/Letters'
import { userSelector } from '../../../store/auth/authSlice'

export const HomePage = () => {
    const { user } = useAppSelector(state => state.auth)

    return !user ? (
        <>
            {' '}
            <ModalEntry />
        </>
    ) : (
        <div className={style.container}>
            <Letters content={user} />
        </div>
    )
}
