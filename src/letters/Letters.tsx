import { Card, CardContent, Divider, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { LetterModal } from '../components/modalLetter/LetterModal'
import { useChat } from '../hooks/useChat'
import { IMessage } from '../types/message'
import { ILetters } from './letters.interface'
import style from './Letters.module.sass'
import { format } from 'date-fns'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Letters: FC<ILetters> = ({ content }) => {
    const [selectedData, setSelectedData] = useState<IMessage | null>()
    const formatDate = (date: Date) => format(date, 'MMMM dd, yyyy, hh:mm aaa')
    const { letters, notification, setNotification } = useChat(content.name)

    const handleTitleClick = (data: IMessage) => setSelectedData(data)

    useEffect(() => {
        if (notification) {
            toast.info('You have received a new message!')
            setNotification(false)
        }
    }, [notification])

    const checkLengthText = (text: string) => text.length > 20 ? `${text.slice(0, 20)}...` : text

    return (
        <>
            {' '}
            <ToastContainer position="top-right" />
            {!!letters?.length ? (
                letters.map((letter) => {
                    return (
                        <Card key={letter.id} className={style.wrapper}>
                            <CardContent className={style.container}>
                                <Typography
                                    onClick={() => handleTitleClick(letter)}
                                >
                                    <span className={style.container_sender}>
                                        from:
                                    </span>{' '}
                                    {letter.user.name}
                                </Typography>
                                <Typography
                                    onClick={() => handleTitleClick(letter)}
                                    className={style.container_title}
                                >
                                    {checkLengthText(letter.title)}
                                </Typography>
                                <Typography color="textSecondary">
                                    {formatDate(new Date(letter.createdAt))}
                                </Typography>
                            </CardContent>
                            <Divider />
                        </Card>
                    )
                })
            ) : (
                <h3 className={style.empty}>😔 There are no messages here yet</h3>
            )}
            {selectedData && (
                <LetterModal
                    content={selectedData}
                    setSelectedData={setSelectedData}
                />
            )}
        </>
    )
}
