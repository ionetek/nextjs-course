import '../styles/Home.module.css'
import { getFeaturedEvents } from '../data'
import EventList from '../components/event-list/EventList'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div className='container'>
      <h1>Featured events</h1>

      <EventList items={featuredEvents} />
    </div>
  )
}
