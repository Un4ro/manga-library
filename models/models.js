const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    permission: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Bookmark  = sequelize.define('bookmark', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BookmarkStuff  = sequelize.define('bookmark_stuff', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, defaultValue: "READ"}
})


const Stuff = sequelize.define('stuff', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0}
})


const Rating  = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING}
})
// const Comments  = sequelize.define('comments', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     body: {type: DataTypes.STRING, allowNull: false},
// })

const Posts = sequelize.define('Posts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
    img: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING, defaultValue: "VIEW"}
})

const Author  = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT}
})

const Chapter  = sequelize.define('chapters', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    chId: {type: DataTypes.INTEGER, allowNull: false},
    body: {type: DataTypes.JSON()}
})

const Type  = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})
const Genre  = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING}
})
const Category  = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING}
})

User.hasMany(Posts)
Posts.belongsTo(User)

User.hasOne(Bookmark)
Bookmark.belongsTo(User)

Bookmark.hasMany(BookmarkStuff)
BookmarkStuff.belongsTo(Bookmark)

Stuff.hasMany(BookmarkStuff)
BookmarkStuff.belongsTo(Stuff)

User.hasMany(Rating)
Rating.belongsTo(User)

Stuff.hasMany(Chapter)
Chapter.belongsTo(Stuff)

Author.hasMany(Stuff)
Stuff.belongsTo(Author)

// Chapter.hasOne(Chapters)
// Chapters.belongsTo(Chapter)

Type.hasMany(Stuff)
Stuff.belongsTo(Type)

const StuffGenre = sequelize.define('stuff_genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const CategoryStuff = sequelize.define('stuff_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

Genre.belongsToMany(Stuff, {through: StuffGenre})
Stuff.belongsToMany(Genre, {through: StuffGenre})
// Stuff.hasMany(Genre)
// Genre.belongsTo(Stuff)

// Stuff.hasMany(Category)
// Category.belongsTo(Stuff)
Category.belongsToMany(Stuff, {through: CategoryStuff})
Stuff.belongsToMany(Category, {through: CategoryStuff})

// User.hasOne(Comments)
// Comments.belongsTo(User)

// Comments.hasMany(Comment)
// Comment.belongsTo(Comments)

// Stuff.hasMany(Comment)
// Comment.belongsTo(Stuff)

module.exports = {
    User,
    Bookmark, 
    BookmarkStuff, 
    Stuff,
    Rating, 
    Author,
    Chapter, 
    Type, 
    Genre, 
    Category,
    Posts
}