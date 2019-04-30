'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.resetGamePlays = functions.https.onRequest(async (_, res) => {
  const firestore = admin.firestore()
  return firestore
    .collection('games')
    .get()
    .then((snapshot) => {
      const games = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        data['key'] = doc.id
        games.push(data)
      })
      return games
    })
    .then((games) => {
      const summary = {}
      games.forEach((game) => {
        summary[game.key] = {
          name: game.name,
          playCount: 0,
        }
      })
      return summary
    })
    .then((summary) => {
      firestore
        .collection('plays')
        .doc('summary')
        .set(summary)
      return res.end()
    })
    .catch((error) => {
      console.error('Error migrating data: ', error)
      return res.status(500).send('Something went wrong.')
    })
})
