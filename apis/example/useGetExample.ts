import useSwr from 'swr'
import { getFetcher, postFetcher } from '../../fetchers'

interface Response {
  user: ExampleType
}

interface ExampleType {
  name: string
  id: string
}

// can consider having a global exampleFetcher for all example modules if the format returned is the same
const exampleFetcher = async (url: string, params?: string) => {
  const response: Response = await getFetcher(url, params)
  return response.user
}

const useGetExample = (id: string) => {
  const { data, error, mutate } = useSwr<ExampleType>(
    `/api/example/${id}`,
    exampleFetcher
  )

  const updateData = async (data: ExampleType) => {
    const newName = data.name.toUpperCase()
    const example: ExampleType = { ...data, name: newName }
    const options = {
      optimisticData: example,
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    }

    // updates the local data immediately
    // send a request to update the data
    // triggers a revalidation (refetch) to make sure our local data is correct
    // here we call post/put/delete fetcher
    // in this case our API needs to return the updated data
    try {
      mutate(postFetcher(`/api/example/update/${id}`, example), options)
    } catch (e) {
      console.log('error', e)
    }
  }

  return {
    data,
    isLoading: !error && !data,
    error,
    updateData,
  }
}

export default useGetExample
