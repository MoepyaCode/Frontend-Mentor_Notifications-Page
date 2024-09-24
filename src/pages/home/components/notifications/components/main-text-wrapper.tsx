import React from 'react'

type Props = {
  children: React.ReactNode
  read: boolean | undefined
}

export function MainTextWrapper(props: Props) {
  return (
    <p className={`relative text-[14px] text-grey-dark text-wrap ${props.read ? '' : 'after:absolute after:translate-x-1 after:translate-y-[.4rem] after:bg-red after:w-[8px] after:aspect-square after:rounded-full after:transition after:duration-300 after:ease-in-out'}`}>
      {props.children}
    </p>
  )
}
