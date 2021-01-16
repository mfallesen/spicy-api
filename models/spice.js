module.exports = function (sequelize, type) {
    const Spice = sequelize.define('Spice', {
        spice_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        purchase_date: type.DATE,
        expiration_date: {
            type: type.DATE,
            allowNull: false,
        },
        brand: type.STRING,
    });

    Spice.associate = function (models) {
        Spice.belongsTo(models.User, {through: 'Spice_rack'})
    };
    return Spice;
};