import { useRouter } from 'next/router'
import { getEventById } from '../../data'
import Link from 'next/link'

function EventDetailPage() {
  const router = useRouter()

  const { event_id } = router.query

  const event = getEventById(event_id)

  const humanDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = event.location.replace(', ', '\n')

  if (!event) {
    return <p>No event found ☹️</p>
  }

  return (
    <>
      <Link href='/'>
        <span className='text-secondary'>{'< Back'}</span>
      </Link>
      <h1> {event.title}</h1>
      <img src={`/${event.image}`} alt={event.title} className='rounded img-fluid mb-2' />
      <div>
        <time className='text-secondary'>{humanDate}</time>
      </div>

      <div>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <p>{event.description}</p>
      </div>
    </>
  )
}

export default EventDetailPage
