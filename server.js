const { Sequelize } = require('sequelize')
var connection = new Sequelize('rabbit', 'root', 'Varshini1998@', {
    host: 'localhost',
    dialect: 'mysql'
});
var Article = connection.define('article', {
    title: sequelize.STRING,
    body: sequelize.TEXT
})

var Article2 = connection.define('article2', {
    section: sequelize.STRING,
    ref: sequelize.STRING
})

Article.hasOne(Article2, {
    foreignKey: "title"
});
Article2.belongsTo(Article);

connection.sync()
