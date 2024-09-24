import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from './notifications'
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

type AppState = typeof store
export type AppDispatch = AppState['dispatch']
export type AppSelector = ReturnType<AppState['getState']>