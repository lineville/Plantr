
const { db, Vegetable, Gardener, Plot } = require('./models')

db.sync({force: true, logging: false})
.then(() => {
  console.log('Connected!')
  Vegetable.bulkCreate([{
    name: 'Carrot',
    color: 'Orange',
    plantedOn: new Date()
  }, {
    name: 'Broccoli',
    color: 'Green',
    plantedOn: new Date()
  }, {
    name: 'Pumpkin',
    color: 'Orange',
    plantedOn: new Date()
  }, {
    name: 'Celery',
    color: 'Green',
    plantedOn: new Date()
  }, {
    name: 'Eggplant',
    color: 'Purple',
    plantedOn: new Date()
  }])
})
.catch((err) => {
  console.log('Error could not connect! ', err)
})
// .finally(() => {
//   db.close()
// })

