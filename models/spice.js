module.exports = function (sequelize, type) {
    const Spice = sequelize.define('Spice', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        spice_name: type.STRING,
        brand: type.STRING,
    });

    Spice.associate = function (models) {
        Spice.belongsToMany(models.User, {through: models.spiceRack, foreignKey: 'spiceId' })
    };
    return Spice;
};