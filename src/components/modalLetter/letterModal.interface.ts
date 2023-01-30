import { IMessage } from './../../types/message';

export interface ILetterModal {
    content: IMessage;
    setSelectedData: (value: IMessage | null) => void;
}