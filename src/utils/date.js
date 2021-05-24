export const getCurrentDate = () => {
  const time = new Date(Date.now())
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return time.toLocaleString('ru', dateOptions)
}
