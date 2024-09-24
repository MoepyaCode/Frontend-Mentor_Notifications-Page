import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export default function Wrapper(props: Props) {
    return (
        <div className={`${props.className} flex gap-[13px]`}>
            {props.children}
        </div>
    )
}
