import { Wrapper } from '@app-components'
import { NotificationWrapper, UserImage, TextWrapper, MainTextWrapper } from './components'

export default function Message(props?: MessageI) {
    return (
        <NotificationWrapper read={props?.read}>
            <UserImage src={props?.user.avatar} alt="" />

            <Wrapper className='flex flex-col gap-[12px]'>
                <TextWrapper>
                    <MainTextWrapper read={props?.read}>
                        <span className='font-extrabold text-grey-very-dark max-w-fit'>{props?.user.name}</span> <span className='font-medium text-grey-dark max-w-fit'>followed you</span>
                    </MainTextWrapper>

                    <p className='font-medium text-grey-default'>{props?.time}</p>

                    <div className='text-[14px] p-4 border border-grey-very-light rounded-[5px] text-grey-dark font-medium hover:bg-grey-light hover:text-grey-dark transition-colors duration-300 ease-out cursor-pointer'>
                        {props?.message}
                    </div>
                </TextWrapper>
            </Wrapper>

        </NotificationWrapper >
    )
}
