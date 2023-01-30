import { api } from './api/api'
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reducer'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(api.middleware),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
