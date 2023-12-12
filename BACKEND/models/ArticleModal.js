import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Article = db.define('article', {
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    content: DataTypes.TEXT
}, {
    freezeTableName: true
});

export default Article;

(async () => {
    await db.sync();
})();
