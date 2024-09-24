import { NotificationWrapper, UserImage, TextWrapper, MainTextWrapper } from './components'

export default function Comment(props?: CommentI) {
  return (
    <NotificationWrapper read={props?.read}>
      <UserImage src={props?.user.avatar} alt="" />

      <TextWrapper className='flex-grow'>
        <div className='flex-grow flex items-start justify-between gap-[27px]'>
          <div className='text-[14px] text-grey-dark text-wrap '>
            <MainTextWrapper read={props?.read}>
              <span className='font-extrabold text-grey-very-dark max-w-fit'>{props?.user.name}</span> <span className='font-medium text-grey-dark max-w-fit'>commented on your picture</span>
            </MainTextWrapper>
            <p className='font-medium text-grey-default'>{props?.time}</p>
          </div>
          <UserImage className='rounded-[7px] cursor-pointer' src={props?.post.src} alt='' />
        </div>
      </TextWrapper>

    </NotificationWrapper >
  )
}
