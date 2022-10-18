import { useRouter } from 'next/router'
import useGetExample from 'apis/example/useGetExample'

const ExampleID = () => {
  const router = useRouter()
  // get the dynamic id part of the route
  const id = router.query.id as string

  const { data, isLoading, error, updateData } = useGetExample(id)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>failed to load</div>
  // Added this to resolve typescript errors
  if (!data) return <div>loading...</div>

  return (
    <>
      <p>ID: {id}</p>
      <div>{data!.name}</div>
      <button onClick={() => updateData({ ...data, name: 'newName' })}>
        Click me
      </button>
    </>
  )
}

export default ExampleID
