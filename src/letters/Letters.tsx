import { Button, Card, CardContent, Divider, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { LetterModal } from '../components/modalLetter/LetterModal'
import { useChat } from '../hooks/useChat'
import { useGetMessagesQuery } from '../store/api/api'
import { IMessage } from '../types/message'
import { ILetters } from './letters.interface'

const Letters: FC<ILetters> = ({content}) => {
    const [selectedData, setSelectedData] = useState<IMessage | null>();

    // const {data} = useGetMessagesQuery(content.id)

    const {letters} = useChat(content.name)

    console.log('messages',letters)
    const handleTitleClick = (data: IMessage) => {
        setSelectedData(data)
    } 
    return (
        <>
            {' '}
            {!!letters?.length ? (
                letters?.map((letter) => {
                    return (
                        <Card key={letter.id}>
                            <div>
                                <CardContent>
                                    <Typography component="h6" variant="h6" onClick={() => handleTitleClick(letter)}>
                                        {letter.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="textSecondary"
                                    >
                                        {letter.text}
                                    </Typography>
                                </CardContent>
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
                                <Divider />
                            </div>
                        </Card>
                    )
                })
            ) : (
                <h2>Сообщений нет</h2> 
            )}
            {selectedData && <LetterModal content={selectedData} setSelectedData={setSelectedData}/>}
        </>
    )
}

export default Letters
