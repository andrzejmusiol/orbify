import { QueryClient, DefaultOptions } from '@tanstack/react-query'

const queryConfig: DefaultOptions = {
  queries: {
    cacheTime: 0,
    retry: false,
    refetchOnWindowFocus: false
  }
}

const queryClient = new QueryClient({ defaultOptions: queryConfig })

export default queryClient
