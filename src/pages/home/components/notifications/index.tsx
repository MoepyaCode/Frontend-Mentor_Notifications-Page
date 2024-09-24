import { Wrapper } from '@app-components'
import { useAppSelector } from '@app-hooks'
import Reaction from './reaction'
import Comment from './comment'
import Group from './group'
import Follow from './follow'
import Message from './message'

export default function Notifications() {
    const notifications = useAppSelector(state => state.notifications)

    const renderNotifications = (data: NotificationITypes, key: number) => {
        switch (data.activity) {
            case 'reaction':
                return <Reaction key={key} {...data} />
            case 'comment':
                return <Comment key={key} {...data} />
            case 'follow':
                return <Follow key={key} {...data} />
            case 'group':
                return <Group key={key} {...data} />
            case 'message':
                return <Message key={key} {...data} />
            default:
                return ''
        }
    }

    return (
        <Wrapper className='flex flex-col gap-[10px]'>
            {notifications.map(renderNotifications)}
        </Wrapper>
    )
}
