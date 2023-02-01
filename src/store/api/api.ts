import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMessage, IMessages } from '../../types/message'
import { IUserQuery, IUsersNames } from '../../types/user'

import { ApiURL } from './../../api/axios'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: ApiURL }),
    endpoints: (builder) => ({
        getMessages: builder.query<IMessage[], number>({
            query: (id) => `messages/user/${id}`,
        }),
        allNames: builder.query<IUsersNames[], void>({
            query: () => `/users/names`,
        }),
        findBySearchQuery: builder.query<IUserQuery[], string>({
            query: (param: string) => `users?searchParam=${param}`,
        }),
        getSentMessages: builder.query<IMessages[], number>({
            query: (id: number) => `messages/sentLetters/${id}`,
        }),
    }),
})

export const {
    useGetMessagesQuery,
    useAllNamesQuery,
    useFindBySearchQueryQuery,
    useGetSentMessagesQuery,
} = api
