const Sequelize = require('sequelize')
const pg = require('pg')
const db = new Sequelize('postgres://localhost:5432/plantr')

const Gardener = db.define('gardeners', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

const Plot = db.define('plots', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

const Vegetable = db.define('vegetables', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  plantedOn: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

Plot.belongsTo(Gardener)
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})


module.exports = {
  db,
  Vegetable,
  Gardener,
  Plot
}

