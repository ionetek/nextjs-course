import { useRef, useState, useContext } from 'react'
import NotificationContext from '../../store/notification-context'

function Reviews(props) {
  const serverLoadedReviews = props.reviews

  const reviewTextRef = useRef()
  const notificationCtx = useContext(NotificationContext)

  const [reviews, setReviews] = useState(serverLoadedReviews)

  const updateReviews = () => {
    fetch('/api/review')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data)
        notificationCtx.showNotification({
          title: 'Success',
          message: 'Review has been added!',
          status: 'success',
        })
      })
  }

  const addReview = (event) => {
    event.preventDefault()
    const text = reviewTextRef.current.value
    console.log('text', text)

    fetch('/api/review', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        updateReviews()
        reviewTextRef.current.value = ''
      })
  }
  return (
    <div className='container'>
      <h1>Reviews</h1>
      <form method='POST' onSubmit={addReview}>
        <div className='row'>
          <div className='col-12'>
            <input
              type='text'
              className='form-control mb-3'
              placeholder='Your review'
              ref={reviewTextRef}
            />
          </div>
          <div className='col'>
            <button className='btn btn-primary'>Send review</button>
          </div>
        </div>
      </form>
      <hr />
      <div>
        <b>Last reviews:</b>
        <br /> <br />
        {reviews.map((review) => (
          <div className='card mb-3' key={review.id}>
            <div className='card-body'>
              <div>
                <b>{review.user}</b>
              </div>
              <span>{review.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/review')

  const reviews = await response.json()

  return {
    props: {
      reviews: reviews.data,
    },
  }
}

export default Reviews
