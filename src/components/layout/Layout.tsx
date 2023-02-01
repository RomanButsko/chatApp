import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import {Header} from '../header/Header'
import { SendMessage } from '../sendMessage/SendMessage'
import style from './Layout.module.sass'

export const Layout = () => {
    return (
        <div className={style.wrapper}>
            <header className={style.wrapper_header}>
                <Header />
            </header>
            <main className={style.wrapper_main}>
                <section className={style.wrapper_sidebar}>
                    <div className={style.wrapper_main__createMess}>
                        <SendMessage />
                    </div>
                </section>
                <Outlet />
            </main>
            <footer className={style.wrapper_footer}>
                <Footer />
            </footer>
        </div>
    )
}
