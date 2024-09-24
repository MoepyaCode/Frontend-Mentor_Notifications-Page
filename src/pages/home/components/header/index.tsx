import { useAppDispatch, useAppSelector } from '@app-hooks'
import { markAllAsRead } from '@app-store/notifications'

export default function Header() {
  const dispatch = useAppDispatch()
  const notifications = useAppSelector(state => state.notifications)
  const unreadNotificationsCount = notifications.filter(notification => !notification.read).length

  return (
    <header className='flex justify-between items-center'>
      <div className='flex items-center gap-[9px]'>
        <h1 className='font-extrabold text-[20px] sm:header'>Notifications</h1>
        <span className='grid place-items-center text-white body-bold bg-blue w-[32px] h-[25px] rounded-md sm:body-bold'>{unreadNotificationsCount}</span>
      </div>

      <button onClick={() => dispatch(markAllAsRead())}  className='font-medium text-[14px] text-grey-dark sm:font-body hover:text-blue transition-colors duration-300 ease-out cursor-pointer'>
        Mark all as read
      </button>
    </header>
  )
}
