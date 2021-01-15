module.exports = function (sequelize, type) {
    const Spice_rack = sequelize.define('Spice Rack', {
        rack_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    });
    Spice_rack.associate = function (models) {
        Spice_rack.belongsTo(models.User, {
            foreignKey: {
                allowNull: true,
            }
        });
        Spice_rack.hasMany(models.spice, {
            foreignKey: {
                allowNull: true,
            }
        });
    };
    return Spice_rack;
};