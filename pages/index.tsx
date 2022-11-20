import { useEffect } from 'react'
import { Spinner, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Route } from '../constants/routes'

const FrontPage = () => {
  const router = useRouter()

  useEffect(() => {
    void router.replace(Route.HomePage())
  }, [router])

  return (
    <Stack height="100vh" justify="center" align="center">
      <Spinner size="xl" />
    </Stack>
  )
}

export default FrontPage