
'use strict';

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()


  

exports.deleteOldInbound = functions.database.ref('db/-L46xegEleuKcTnJXDjg/inbound/{pushId}').onWrite((change) => {
  const ref = change.after.ref.parent; // reference to the parent
  const oldItemsQuery = ref.orderByChild('timestamp').limitToLast(12)
  return oldItemsQuery.once('value').then((snapshot) => {
    // create a map with all children that need to be removed
    ref.set(snapshot.val())
    // execute all updates in one go and return the result to end the function
  })
})

exports.deleteOldOutbound = functions.database.ref('db/-L46xegEleuKcTnJXDjg/outbound/{pushId}').onWrite((change) => {
  const ref = change.after.ref.parent; // reference to the parent
  const oldItemsQuery = ref.orderByChild('timestamp').limitToLast(12)
  return oldItemsQuery.once('value').then((snapshot) => {
    // create a map with all children that need to be removed
    ref.set(snapshot.val())
    // execute all updates in one go and return the result to end the function
  })
})

exports.deleteOldSpeedtest = functions.database.ref('db/-L46xegEleuKcTnJXDjg/speedtest/{pushId}').onWrite((change) => {
  const ref = change.after.ref.parent; // reference to the parent
  const oldItemsQuery = ref.orderByChild('timestamp').limitToLast(12)
  return oldItemsQuery.once('value').then((snapshot) => {
    // create a map with all children that need to be removed
    ref.set(snapshot.val())
    // execute all updates in one go and return the result to end the function
  })
})
