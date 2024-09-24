import { NotificationWrapper, UserImage, TextWrapper, MainTextWrapper } from './components'

export default function Group(props?: GroupI) {

  function groupStatus() {
    switch (props?.group.status) {
      case 'joined':
        return 'has joined your group'
      case 'left':
        return 'left the group'
      default:
        return ''
    }
  }

  return (
    <NotificationWrapper read={props?.read}>
      <UserImage src={props?.user.avatar} alt="" />

      <TextWrapper>
        <MainTextWrapper read={props?.read}>
          <span className='font-extrabold text-grey-very-dark max-w-fit'>{props?.user.name}</span> <span className='font-medium text-grey-dark max-w-fit'>{groupStatus()}</span> <span className='font-bold text-blue cursor-pointer'>{props?.group.name}</span>
        </MainTextWrapper>
        
        <p className='font-medium text-grey-default'>{props?.time}</p>

      </TextWrapper>
    </NotificationWrapper>
  )
}
