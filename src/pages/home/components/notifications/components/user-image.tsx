
type Props = {
    src: string | undefined,
    alt: string
    className?: string
}

export function UserImage(props: Props) {
  return (
    <img className={`${props.className} object-contain max-w-[39px] w-full aspect-square rounded-full`} src={props.src} alt={props.alt} />
  )
}
