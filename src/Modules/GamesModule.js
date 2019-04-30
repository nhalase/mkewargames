import { firestore } from '../Components/Firebase'
import _ from 'underscore'
import { thumbnails } from '../Images'

const handleGamesSnapshot = (doc) => {
  const data = doc.data()
  const games = Object.keys(data).map((id) => {
    const tn = thumbnails[id]
    return {
      key: id,
      name: data[id].name,
      playCount: data[id].playCount,
      thumbnail: tn ? tn : thumbnails['unknown'],
    }
  })
  const partitionedGames = _.partition(games, (game) => game.playCount > 0)
  return _.sortBy(partitionedGames[0], (game) => game.playCount * -1).concat(_.sortBy(partitionedGames[1], 'name'))
}
const fetchGameSummariesByPlayCount = async () => {
  console.info('fetching game summaries (by play count)')
  try {
    const doc = await firestore
      .collection('plays')
      .doc('summary')
      .get()
    return handleGamesSnapshot(doc)
  } catch (error) {
    return console.error('Failed to fetch game summaries (by play count): ', error)
  }
}

export { fetchGameSummariesByPlayCount }
