import Link from 'next/link'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <>
      <header className='mb-5'>
        <Link href='/'>
          <a className='logo'>Evento</a>
        </Link>
        <nav className='header-navigation'>
          <ul>
            <li>
              <Link href='/'>
                <a className={currentRoute === '/' ? 'active' : ''}>Featured</a>
              </Link>
            </li>
            <li>
              <Link href='/events'>
                <a className={currentRoute === '/events' ? 'active' : ''}>All events</a>
              </Link>
            </li>
            <li>
              <Link href='/products'>
                <a className={currentRoute === '/products' ? 'active' : ''}>Products</a>
              </Link>
            </li>
            <li>
              <Link href='/profile'>
                <a className={currentRoute === '/profile' ? 'active' : ''}>Profile</a>
              </Link>
            </li>
            <li>
              <Link href='/reviews'>
                <a className={currentRoute === '/reviews' ? 'active' : ''}>Reviews</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
