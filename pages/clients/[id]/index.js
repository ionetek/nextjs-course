import { useRouter } from 'next/router'

function ClientProjectPage() {
  const router = useRouter()
  const { query } = useRouter()

  function viewProjectHandler() {
    //load data..
    router.push('/clients/max/my_project')

    /*or*/
    /*
      router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'project_a' },
    }) */
  }

  return (
    <>
      <h1>The Projects of given client "{query.id}"</h1>
      <button onClick={viewProjectHandler}>View "my_project"</button>
    </>
  )
}
export default ClientProjectPage
