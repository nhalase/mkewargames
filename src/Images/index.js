const importAll = (r) => {
  let images = {}
  r.keys().forEach((item) => {
    const file = item.replace('./', '')
    const indexOfSuffix = file.lastIndexOf('.')
    images[file.substring(0, indexOfSuffix)] = r(item)
  })
  return images
}

const thumbnails = importAll(require.context('.', false, /\.(png|jpe?g|svg)$/))

export { thumbnails }
