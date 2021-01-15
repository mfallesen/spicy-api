module.exports = function (sequelize, type) {
    const User = sequelize.define('User', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        username: {
            type: type.STRING,
            allowNull: false, 
        },
        password: {
            type: type.STRING,
            allowNull: false, 
        },
        email: {
            type: type.STRING,
            allowNull: false,
        },
        resetPasswordToken: type.STRING,
        resetPasswordExpires: type.DATE,
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        }

    });
    User.associate = function (models) {
        User.hasOne(models.user_spice_rack)
    };

    return User;
};

