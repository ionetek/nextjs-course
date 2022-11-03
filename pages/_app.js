//ОБОЛОЧКА ДЛЯ ВСЕХ СТРАНИЦ

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Notification from '../components/ui/notification/Notification'
import { NotificationContextProvider } from '../store/notification-context'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  )
}

export default MyApp
