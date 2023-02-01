import style from './HomePage.module.sass'
import { ModalEntry } from '../../components/modalEntry/ModalEntry'
import { useAppSelector } from '../../hooks/useSelector'
import {Letters} from '../../letters/Letters'

export const HomePage = () => {
    const { user } = useAppSelector((state) => state.auth)

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
