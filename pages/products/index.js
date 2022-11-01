import Link from 'next/link'

function Products(props) {
  const { products } = props
  return (
    <div className='container'>
      <h1>Products</h1>
      <p className='text-secondary'>Product list loaded on server when building</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>{product.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  console.log('Regenerating...')

  const products = [
    { id: '1', title: 'MacBook Pro 16', description: 'The most popular laptop' },
    { id: '2', title: 'iPhone 14 Pro Max', description: 'The most popular phone' },
    { id: '3', title: 'Samsung HD TV', description: 'The most popular tv' },
  ]

  //Если не получили товары
  if (!products.length === 0) {
    return {
      redirect: {
        destination: '/no-products',
      },
    }
  }

  return {
    props: {
      products,
    },
    //Через сколько секунд перегенерировать страницу на сервере.
    //Работает только на prod сборке.На dev генерится при каждом запросе
    revalidate: 10,

    /* Скрыть страницу. Будет показано 404
    notFound: true,
    */
  }
}

export default Products
