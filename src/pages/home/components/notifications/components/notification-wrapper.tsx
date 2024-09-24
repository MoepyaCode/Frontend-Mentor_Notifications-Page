import { Wrapper } from '@app-components'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
    read?: boolean
}

export function NotificationWrapper(props: Props) {
  return (
    <Wrapper className={`p-4 flex items-start rounded-lg ${props?.read ? 'bg-transparent' : 'bg-snow'} transition-colors duration-300 ease-out`}>
        {props.children}
    </Wrapper>
  )
}