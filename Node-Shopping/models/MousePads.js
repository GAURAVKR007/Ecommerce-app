module.exports = (sequelize , DataTypes) => {
    const MousePads = sequelize.define("MousePads",{
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

    return MousePads
}