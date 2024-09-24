import { Container, Main } from "@app-components"
import { useAppDispatch, useAppSelector } from "@app-hooks"
import { setNotifications } from "@app-store/notifications"
import { useEffect } from "react"
import Header from "./components/header"
import Notifications from "./components/notifications"

export default function Home() {
  const notifications = useAppSelector(state => state.notifications)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function handleFetchNotifications() {
      if (notifications.length === 0) {
        const response = await fetch('/data/data.json')
        const data = await response.json()
        dispatch(setNotifications(data))
      }
    }
    handleFetchNotifications()
  }, [dispatch, notifications.length])

  return (
    <Main className="bg-[#F9FAFD] grid place-items-center sm:py-[63px]">
      <Container className="flex flex-col px-4 py-6 sm:p-[30px] gap-6 bg-white max-w-[730px] sm:rounded-[15px] shadow-[0_20px_60px_0px_rgba(73,97,168,.05)]">
        <Header />
        <Notifications />
      </Container>
    </Main>
  )
}