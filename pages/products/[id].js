function Product(props) {
  const { product } = props

  if (!product) {
    return <p>Loading...</p>
  }

  return (
    <div className='container'>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  )
}

//Прокидываем в компонент пропсы, необходимые для рендера страницы на сервере
export async function getStaticProps(context) {
  const { params } = context

  //Получаем id из url
  const productId = params.id

  const products = [
    { id: '1', title: 'MacBook Pro 16', description: 'The most popular laptop' },
    { id: '2', title: 'iPhone 14 Pro Max', description: 'The most popular phone' },
    { id: '3', title: 'Samsung HD TV', description: 'The most popular tv' },
  ]

  const product = products.find((product) => product.id === productId)

  //Показываем страницу notFound, если не нашли информацию о товаре
  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
    },
  }
}

//Прокидываем массив значений диамического парамтра, чтобы Next знал, какие страницы генерировать
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: '1' },
      },
      {
        params: { id: '2' },
      },
      {
        params: { id: '3' },
      },
    ],
    //Нужно ли выбрасывать ошибку при переходе по несуществующему пути
    //Можно указать true, если хотим передать не полный перчень всех существующих страниц,
    //а только чать. Например самые нагруженные страницы.
    //При этом остальные будут рендериться в браузере и на них нужно добавить проверку
    // существования данных перед отрисовкой шалона
    //Также можно указать значение 'blocking', тогда страница не дудет рендериться,
    // пока не получит данные
    fallback: true,
  }
}

export default Product
