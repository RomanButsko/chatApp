import { FC, useState } from 'react'
import { ILetterModal } from './letterModal.interface'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import style from './LetterModal.module.sass'
import { format } from 'date-fns'

export const LetterModal: FC<ILetterModal> = ({content, setSelectedData}) => {
    const [open, setOpen] = useState(true);

    const formattedDate = format(new Date(content.createdAt), 'dd/MM/yyyy HH:mm')
    const handleClose = () => {
        setOpen(false);
        setSelectedData(null)
    }
  
  return (
    <div className={style.container}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={style.container_box} >
          <Box display='flex' justifyContent='space-between'>
            <Box>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Title {content.title}
                </Typography>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                author {content.user.name}
                </Typography>
            </Box>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {formattedDate}
            </Typography>
            </Box>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {content.text}
            </Typography>
            <div>
                <Button size="small" color="primary">
                    Reply
                </Button>
                <Button size="small" color="primary">
                    Forward
                </Button>
                <Button size="small" color="secondary">
                    Delete
                </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
