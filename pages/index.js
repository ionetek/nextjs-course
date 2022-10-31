import { getFeaturedEvents } from '../data'
import EventList from '../components/event-list/EventList'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div className='container'>
      <div className='mb-5'>
        <h1>Featured events</h1>
        <hr />
      </div>
      <EventList items={featuredEvents} />
    </div>
  )
}
