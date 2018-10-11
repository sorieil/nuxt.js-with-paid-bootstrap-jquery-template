import * as firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp(process.env.FIREBASE_CONFIG)
}
const settings = {timestampsInSnapshots: true}
export let defaultAuth = firebase.auth()
export let defaultStore = firebase.firestore()
defaultStore.settings(settings)
export let serverTime = firebase.firestore.FieldValue.serverTimestamp()
export {
  firebase
}
