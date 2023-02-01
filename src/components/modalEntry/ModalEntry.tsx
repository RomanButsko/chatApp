import { Button, Modal, Paper, TextField } from '@mui/material'
import { ChangeEvent, useRef, useState } from 'react'
import style from './ModalEntry.module.sass'
import SendIcon from '@mui/icons-material/Send'
import { useActions } from '../../hooks/useDispatch'

export const ModalEntry = () => {
    const [open, setOpen] = useState<boolean>(true)
    const [disabled, setDisabled] = useState<boolean>(true)

    const ref = useRef<HTMLInputElement>(null)

    const { signInUser } = useActions()

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const handleSignIn = () => {
        if (ref.current && ref.current.value) {
            signInUser({ name: ref.current.value })
        }
    }

    const handleTextField = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) setDisabled(false)
        else setDisabled(true)
    }

    return (
        <>
            <Button color="primary" onClick={handleOpen} size="large">
                Click here to Sign In
            </Button>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                onClose={handleClose}
                className={style.modal}
            >
                <Paper className={style.modal_block}>
                    <div>
                        <h2 id="simple-modal-title">Enter your name</h2>
                        <TextField
                            id="standard-basic"
                            label="Name"
                            inputRef={ref}
                            onChange={handleTextField}
                        />
                    </div>
                    <Button
                        sx={{ margin: '0 auto', width: '50%' }}
                        color="success"
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={handleSignIn}
                        disabled={disabled}
                    >
                       Sign in
                    </Button>
                </Paper>
            </Modal>
        </>
    )
}
