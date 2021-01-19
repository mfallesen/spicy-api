module.exports = function (sequelize, type) {
    const Spice_rack = sequelize.define('spiceRack', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        purchase_date: type.DATE,
        expiration_date: {
            type: type.DATE,
            allowNull: false,
        },
    });
    // Spice_rack.associate = function (models) {
    //     Spice_rack.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: true,
    //         }
    //     });
    //     Spice_rack.hasMany(models.Spice, {
    //         foreignKey: {
    //             // foreignKey: Spice.spice_id,
    //             allowNull: true,
    //         }
    //     });
    // };
    return Spice_rack;
};