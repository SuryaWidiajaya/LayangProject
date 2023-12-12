import {Sequelize} from "sequelize";

const db = new Sequelize('layanan_db','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;