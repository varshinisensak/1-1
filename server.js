const { Sequelize } = require('sequelize')

var connection = new Sequelize('rabbit', 'root', 'Varshini1998@', {
    host: 'localhost',
    dialect: 'mysql'
});
var Article = connection.define('article', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT
})

var Article2 = connection.define('article2', {
    section: Sequelize.STRING,
    ref: Sequelize.STRING
})

Article.hasOne(Article2, {
    foreignKey: "title"
});
Article2.belongsTo(Article);

connection.sync()
