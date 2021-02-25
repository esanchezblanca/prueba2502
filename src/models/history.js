module.exports = (sequelize, type) => {
    return sequelize.define('History', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        value: type.STRING
    })
}