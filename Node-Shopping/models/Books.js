module.exports = (sequelize , DataTypes) => {
    const Books = sequelize.define("Books",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return Books
}