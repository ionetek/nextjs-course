import { getAllEvents } from '../../data'
import EventList from '../../components/event-list/EventList'
import Search from '../../components/search/Search'
import { useRouter } from 'next/router'

function AllEventsPage() {
  const events = getAllEvents()
  const router = useRouter()

  function onSearch({ keyword, year, month }) {
    console.log('Search', keyword, year, month)
    router.push(`/events/${keyword}/${year}/${month}`)
  }

  return (
    <div className='container'>
      <h1>All events</h1>
      <Search onSearch={onSearch} />
      <EventList items={events} />
    </div>
  )
}

export default AllEventsPage
