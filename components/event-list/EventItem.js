import Link from 'next/link'
import Image from 'next/image'

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
            <Image
              src={image}
              alt={title}
              width={1280}
              height={832}
              className='rounded img-fluid'
            />
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
