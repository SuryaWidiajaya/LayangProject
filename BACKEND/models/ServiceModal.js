import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Service = db.define('service', {
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    ttl: DataTypes.STRING,
    agama: DataTypes.STRING,
    status: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    jenis: DataTypes.STRING,
    ktp: DataTypes.STRING,
    urlKtp: DataTypes.STRING,
    kk: DataTypes.STRING,
    urlKk: DataTypes.STRING,
    proses: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Service;

(async () => {
    await db.sync();
})();
