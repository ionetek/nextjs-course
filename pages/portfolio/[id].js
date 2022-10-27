import { useRouter } from 'next/router'

function PortfolioProject() {
  const { query } = useRouter()
  console.log(`Portfolio #${query.id}`)

  return (
    <>
      <h1>Project #{query.id}</h1>
    </>
  )
}
export default PortfolioProject
