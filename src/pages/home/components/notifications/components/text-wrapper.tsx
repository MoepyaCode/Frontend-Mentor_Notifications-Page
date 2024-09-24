import { Wrapper } from '@app-components'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export  function TextWrapper(props: Props) {
  return (
    <Wrapper className={`${props.className} flex flex-col gap-[3px] text-[14px]`}>
        {props.children}
    </Wrapper>
  )
}
