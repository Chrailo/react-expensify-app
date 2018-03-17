import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain:  process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:  process.env.FIREBASE_DATABASE_URL,
  projectId:  process.env.FIREBASE_PROJECT_ID,
  storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
};

firebase.initializeApp(config);

 const database = firebase.database()

 export {firebase, database as default }

// //child removed_event
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({ 
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database.ref('expenses')
// .on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })


const expenseRef = database.ref('expenses')
expenseRef.push({
  description: 'Plane ticket',
  note: 'Yeaa',
  amount: 150000,
  createdAt: 1000
})




// database.ref('notes/-L7Bo390QSDRGJOfQypv').remove()

// database.ref('notes').push({
//          title: 'Course topics',
//          body: 'React native, Angular, firebase',    
//        })

// database.ref('notes').set(notes)
// database.ref('notes/12')

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const data = snapshot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// })

// setup data sub -> name is job at company

//change the data and make sure it reprints

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref('age').set(28)
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(30)
// }, 10500)


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   }).catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Chrille Massse',
//   age: 39,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google',
//   },
//   isSingle: false,
//   location: {
//     city: 'Karlskrona',
//     country: 'Sweden'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed.', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// })



// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Removed params')
//   }).catch((e) => {
//     console.log('Error removing.',e )
//   })
