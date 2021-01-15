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
        brand: type.String,
    });

    Spice.associate = function (models) {
        Spice.belongsToMany(models.user_spice_rack)
    };
    return Spice;
};