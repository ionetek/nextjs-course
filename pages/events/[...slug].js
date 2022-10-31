import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { getFilteredEvents } from '../../data'
import EventList from '../../components/event-list/EventList'

function FilteredEventsPage() {
  const router = useRouter()

  let [events, setEvents] = useState([])

  useEffect(() => {
    if (!router.query.slug) {
      return
    }
    console.log(router.query.slug)

    setEvents(getFilteredEvents({
      keyword: router.query.slug[0],
      year: router.query.slug[1],
      month: router.query.slug[2],
    }))

  }, [router.query.slug])

  console.log('events', events)

  return (
    <div className='container'>
      <h1>Filered events</h1>
      <EventList items={events} />
    </div>
  )
}

export default FilteredEventsPage
