import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import post from '../utils'
import { FromData } from '../features/types'

const QUERY_KEY = 'post-map'

type PostMapOptions = {
  body: FromData
}

const postMap = async ({ body }: PostMapOptions): Promise<AxiosResponse<void>> => post('/api/map', { body })

const usePostMap = () =>
  useMutation({
    mutationKey: [QUERY_KEY],
    mutationFn: postMap
  })

export default usePostMap
