const { DataTypes } = require('sequelize');
module.exports = model;
function model(sequelize) {
    const attributes = {
        mail: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false }
    };
    const options = {
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    };
    return sequelize.define('User', attributes, options);
}
