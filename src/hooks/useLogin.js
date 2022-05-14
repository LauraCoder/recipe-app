import { useMutation, useApolloClient } from '@apollo/client'
import useAuthStorage from './useAuthStorage'
//import { useContext } from 'react'

//import AuthStorageContext from '../contexts/AuthStorageContext'
import { LOGIN } from '../graphql/mutations'

const useLogin = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const [mutate, result] = useMutation(LOGIN)

  const signIn = async ({ username, password }) => {
    const credentials = await mutate({ variables: { credentials: { username, password } } })
    const { data } = credentials
    await authStorage.setAccessToken(data.authenticate.accessToken)
    client.resetStore()

    return credentials
  }

  return [signIn, result]
}

export default useLogin