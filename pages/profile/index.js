function Profile() {
  return (
    <div className='container'>
      <h1>Profile</h1>
      <p className='text-secondary'>Page that uses getServerSideProps()</p>
    </div>
  )
}

//Данные пропсы не создаются во время сборки. Они создаются прикаждом запросе
//Также появился доступ к переменным req, res
export async function getServerSideProps(context) {
  const { params, req, res } = context

  console.log('REQUEST:', req)
  console.log('RESPONSE:', res)
  console.log('PARAMS:', params)

  return {
    props: {
      username: 'Ivan',
    },
  }
}

export default Profile
