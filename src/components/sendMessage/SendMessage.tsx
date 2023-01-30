import { Button, Modal, TextField } from '@mui/material'
import { useState } from 'react'
import { useOutside } from '../../hooks/useOutside'
import { useSearch } from '../../hooks/useSearch'
import { useAppSelector } from '../../hooks/useSelector'
import { useUserExists } from '../../hooks/useUserExist'
import { userSelector } from '../../store/auth/authSlice'
import style from './SendMessage.module.sass'

export const SendMessage = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [to, setTo] = useState<any>('')
    const [theme, setTheme] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const { searchTerm, searchResults, handleChange, setSearchTerm } =
    useSearch();

    const { ref, isShow, setIsShow } = useOutside(true);

    const user = useUserExists()

    const userData = useAppSelector(state => state.auth.user);
    // const {send} = useChat(userData?.name)


    const handleSelectName = (name: string) => {
        setSearchTerm(name);
        setIsShow(false)
    }


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        // send({title: theme, text: message, toUserId: searchTerm, userId: +userData.id })
    }
    return (
        <div>
            <Button
                variant="contained"
                onClick={handleOpen}
                className={style.btn_main}
            >
                Send Letter
            </Button>
            <Modal open={open} onClose={handleClose} className={style.modal}>
                <div className={style.modal_container}>
                    <h2>Send Message</h2>
                    <TextField
                        label="To"
                        value={searchTerm}
                        onChange={handleChange}
                        onClick={() => setIsShow(true)}
                        fullWidth
                    />
                    {searchTerm && isShow && (
                        <div ref={ref}>
                            <ul>
                                {searchResults.length ? (
                                    searchResults.map((item) => (
                                        <li
                                            onClick={() => handleSelectName(item.name)}
                                        >{item.name}</li>
                                    ))
                                ) : (
                                    <span>
                                        ничего не найдено
                                    </span>
                                )}
                            </ul>
                        </div>
                    )}
                    <TextField
                        label="theme"
                        value={theme}
                        onChange={(event) => setTheme(event.target.value)}
                        fullWidth
                        style={{ marginTop: 16 }}
                    />
                    <TextField
                        label="Message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        fullWidth
                        multiline
                        rows={8}
                        style={{ marginTop: 16, marginBottom: 10 }}
                    />
                    <Button className={style.btn_close}>Close</Button>
                    <Button
                        className={style.btn_send}
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={!user}
                    >
                        Submit
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
