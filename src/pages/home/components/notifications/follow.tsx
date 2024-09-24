import { NotificationWrapper, UserImage, TextWrapper, MainTextWrapper } from './components'

export default function Follow(props?: FollowI) {
    return (
        <NotificationWrapper read={props?.read}>
            <UserImage src={props?.user.avatar} alt="" />

            <TextWrapper>
                <MainTextWrapper read={props?.read}>
                        <span className='font-extrabold text-grey-very-dark max-w-fit hover:text-blue transition-colors duration-300 ease-out cursor-pointer'>{props?.user.name}</span> <span className='font-medium text-grey-dark max-w-fit'>followed you</span>
                </MainTextWrapper>
                <p className='font-medium text-grey-default'>{props?.time}</p>

            </TextWrapper>

        </NotificationWrapper >
    )
}
