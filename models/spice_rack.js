module.exports = function (sequelize, type) {
    const Spice_rack = sequelize.define('Spice Rack', {
        rack_space_id: {
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
    Spice_rack.associate = function (models) {
        Spice_rack.belongsTo(models.User, {
            foreignKey: {
                allowNull: true,
            }
        });
        Spice_rack.hasMany(models.Spice, {
            foreignKey: {
                allowNull: true,
            }
        });
    };
    return Spice_rack;
};