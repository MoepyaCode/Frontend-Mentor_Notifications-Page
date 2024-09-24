import { MainTextWrapper, NotificationWrapper, TextWrapper, UserImage } from './components'

export default function Reaction(props?: ReactionI) {
    return (
        <NotificationWrapper read={props?.read}>
            <UserImage src={props?.user.avatar} alt="" />

            <TextWrapper>
                <MainTextWrapper read={props?.read}>
                    <span className='font-extrabold text-grey-very-dark max-w-fit'>{props?.user.name}</span> <span className='font-medium text-grey-dark max-w-fit'>reacted to your recent post</span> <span className='font-bold max-w-fit hover:text-blue cursor-pointer transition-colors duration-300 ease-out'>{props?.postname}</span>
                </MainTextWrapper>
                <p className='font-medium text-grey-default'>{props?.time}</p>
            </TextWrapper>

        </NotificationWrapper >
    )
}
