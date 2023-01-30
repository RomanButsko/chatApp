import { useEffect, useMemo, useState } from 'react';
import io ,{ Socket } from 'socket.io-client';
import { IMessage, IMessageCreate } from '../types/message';

export const useChat = (name: string) => {
    // const [socket] = useState<Socket>(
    //     io(`http://localhost:80/mail`, {
    //         query: {
    //             name,
    //         },
    //     })
    // );
    const [socket, setSocket] = useState<Socket>()
    const [letters, setLetters] = useState<IMessage[]>([]);

    const messageListener = (message: IMessage[]) => {
        setLetters([...letters, ...message]);
    };

    useEffect(() => {
        setSocket(io(`http://localhost:80/mail`, {
            query: {
                name,
            },
        }))
        return () => {
            socket?.disconnect();
            };
    }, [name])

    useEffect(() => {
        if (socket) {
            socket.on('letters:get', (letters: IMessage[]) => {
                setLetters(letters);
            });
            socket.emit('letters:get', name);
            }
    }, [socket, name])

    // useEffect(() => {
    //     console.log('name3', name)
    //     socket?.emit("letters:get", name);
    //     socket?.on("letters:get", messageListener);
    //     return () => {
    //         socket?.disconnect();
    //     };
    // }, []);

    const send = (payload: IMessageCreate) => {
        socket?.emit("letters:create", payload);
    };

    return {letters , send};
}