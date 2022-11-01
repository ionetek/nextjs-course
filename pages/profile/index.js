function Profile(props) {
  const { user } = props
  return (
    <div className='container'>
      <h1>Profile</h1>
      <p className='text-secondary'>
        Page that uses getServerSideProps() and load date by fetch on server side
      </p>
      <ul>
        <li>Name: {user.name}</li>
        <li>Profession: {user.profession}</li>
        <li>Location: {user.location}</li>
        <li>Sex: {user.sex}</li>
        <li>Date of birth: {user.dateOfBirth}</li>
      </ul>
    </div>
  )
}

//Данные пропсы не создаются во время сборки. Они создаются прикаждом запросе
//Также появился доступ к переменным req, res
export async function getServerSideProps(context) {
  const { params, req, res } = context

  const response = await fetch('http://localhost:3000/api/user')

  const user = await response.json()

  return {
    props: {
      user,
    },
  }
}

export default Profile
