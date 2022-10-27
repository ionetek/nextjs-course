import { useRouter } from 'next/router'

function SelectedClientProject() {
  const { query } = useRouter()
  return (
    <>
      <h1>Specific project #{query.clientprojectid} for selected client</h1>
    </>
  )
}
export default SelectedClientProject
