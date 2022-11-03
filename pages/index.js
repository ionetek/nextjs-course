import { getFeaturedEvents } from '../data'
import EventList from '../components/event-list/EventList'
import Head from 'next/head'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div className='container'>
      <Head>
        {/* Head - Компонент устанавливающий содержимое <head></head>
            может использоваться в любом месте */}
        <title>Featured events</title>
      </Head>
      <div className='mb-5'>
        <h1>Featured events</h1>
        <hr />
      </div>
      <EventList items={featuredEvents} />
    </div>
  )
}
