const Sequelize = require('sequelize');

const HistoryModel = require('./models/history');

 const sequelize = new Sequelize('n6Qo29AEdP', 'n6Qo29AEdP', 'mZv7KBqjZa', {
     host: 'remotemysql.com',
     dialect: 'mysql'
 });


const History = HistoryModel(sequelize, Sequelize);

sequelize.sync({ force: false})
.then(() => {
    console.log('Sincronizado')
});

module.exports ={
    History
}