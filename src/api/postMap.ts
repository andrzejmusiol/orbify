import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import post from './utils'
import { FromData } from '../features/types'

const QUERY_KEY = 'post-map'

const postMap = async (data: FromData): Promise<AxiosResponse<void>> => post('/api/map', data)

const usePostMap = () =>
  useMutation({
    mutationKey: [QUERY_KEY],
    mutationFn: postMap
  })

export default usePostMap
