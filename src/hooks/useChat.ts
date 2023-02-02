import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { IMessage, IMessageCreate } from '../types/message'

export const useChat = (name?: string) => {
    const socket = io('wss://chatappser-production.up.railway.app/mail', { query: { name: name },  transports: ['websocket',  'polling'] } )

    const [letters, setLetters] = useState<IMessage[]>([])
    const [notification, setNotification] = useState<boolean>(false)

    useEffect(() => {
        socket.emit('letters:get', name, (message: IMessage[]) => {
            setLetters(message)
        })

        socket.on('letters:create', (receivedLetters: IMessage) => {
            if (receivedLetters.toUser.name === name) {
                setNotification(true)
                setLetters((prevValue) => [receivedLetters, ...prevValue])
            }
        })

        return () => {
            socket.off('letters:get')
        }
    }, [])

    const send = (payload: IMessageCreate) => {
        socket?.emit('letters:create', payload)
    }

    return { letters, send, setLetters, notification, setNotification }
}
