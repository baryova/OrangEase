module.exports = (sequelize, DataTypes) => {

    const users = sequelize.define("users", {
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        group: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return users
}