module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define("contact", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        mobile: {
            type: DataTypes.STRING,
        }
    
    })

    return Contact

}


