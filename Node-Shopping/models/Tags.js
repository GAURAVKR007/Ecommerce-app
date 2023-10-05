module.exports = (sequelize , DataTypes) => {
    const Tags = sequelize.define("Tags",{
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

    return Tags
}