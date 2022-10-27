import Link from 'next/link'

function EventItem(props) {
  const { title, image, date, location, id } = props

  const humanDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')

  return (
    <>
      <li className='mb-5'>
        <Link href={`/events/${id}`}>
          <a>
            <img src={image} alt={title} className='rounded img-fluid mb-2' />
          </a>
        </Link>
        <div>
          <time className='text-secondary'>{humanDate}</time>
        </div>
        <Link href={`/events/${id}`}>
          <a>
            <h2 className='mt-0'>{title}</h2>
          </a>
        </Link>

        <div>
          <address>{formattedAddress}</address>
        </div>
      </li>
    </>
  )
}

export default EventItem
