import Link from 'next/link'

function ClientList() {
  const clients = [
    { id: 'max', name: 'Maxim' },
    { id: 'ione', name: 'Ivan' },
  ]
  return (
    <>
      <h1>Client list</h1>
      <ul>
        {/*Dinamic routes*/}
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {/*Static routes*/}
        <li>
          <Link href='/clients/alina'>Alina</Link>
        </li>
        <li>
          <Link href='/clients/alexey'>Alexey</Link>
        </li>
      </ul>
    </>
  )
}
export default ClientList
