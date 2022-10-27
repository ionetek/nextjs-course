import Link from 'next/link'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <>
      <header>
        <Link href='/'>
          <a className='logo'>Evento</a>
        </Link>
        <nav className='header-navigation'>
          <ul>
            <li>
              <Link href='/'>
                <a className={currentRoute === '/' && 'active'}>Featured</a>
              </Link>
            </li>
            <li>
              <Link href='/events'>
                <a className={currentRoute === '/events' && 'active'}>All events</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
