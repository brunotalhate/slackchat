export function formatDate(date) {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const amPm = hours >= 12 ? 'PM' : 'AM'
  const amPmHours = hours % 12 === 0 ? 12 : hours % 12
  const prettyMinutes = minutes < 10 ? `0${minutes}` : minutes
  const strTime = `${amPmHours}:${prettyMinutes} ${amPm}`
  return strTime
}
