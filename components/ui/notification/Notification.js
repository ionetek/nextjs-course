function Notification({ notification, hideNotification }) {
  //Скрываем notification через 3 секунды

  if (notification.active) {
    setTimeout(hideNotification, 3000)
  }

  return (
    <div className={notification.active ? 'notification notification-visible' : 'notification'}>
      <b>{notification.title}</b>
      <br />
      <span>{notification.message}</span>
    </div>
  )
}

export default Notification
