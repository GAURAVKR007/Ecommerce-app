module.exports = (sequelize , DataTypes) => {
    const Coffees = sequelize.define("Coffees",{
        img : {
            type: DataTypes.STRING,
            allowNull : false,
        },
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

    return Coffees
}