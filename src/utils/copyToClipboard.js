export const copyToClipboard = (item) => {
  const newTextArea = document.createElement('textarea')
  newTextArea.innerText = item
  document.body.appendChild(newTextArea)
  newTextArea.select()
  document.execCommand('copy')
  newTextArea.remove()
}
