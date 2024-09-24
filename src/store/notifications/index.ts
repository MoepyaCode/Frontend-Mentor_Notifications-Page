import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const NotificationState: NotificationITypes[] = []

const notifificationSlice = createSlice({
    name: 'notifications',
    initialState: NotificationState,
    reducers: {
        setNotifications: (state, action: PayloadAction<NotificationITypes[]>) => {
            state.push(...action.payload)
        },
        markAllAsRead: (state) => {
            state.forEach(notification => {
                notification.read = true
            })
        }
    }
})

export const { setNotifications, markAllAsRead } = notifificationSlice.actions
export default notifificationSlice.reducer