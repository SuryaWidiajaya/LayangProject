import Article from "../models/ArticleModal.js";
import path from "path";
import fs from "fs";


export const getArticles = async (req, res) => {
    try {
        const response = await Article.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getArticleById = async (req, res) => {
    try {
        const response = await Article.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveArticle = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "Mohon lengkapi data" });
    const name = req.body.author;
    const date = req.body.date;
    const title = req.body.title;
    const content = req.body.content;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = `${Date.now()}_${file.md5}${ext}`;
    const url = `${req.protocol}://${req.get("host")}/imagesArticle/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Format image tidak sesuai" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Ukuran maksimal image hanya 5 MB" });

    file.mv(`./public/imagesArticle/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Article.create({ name: name, image: fileName, url: url, date: date, title: title, content: content });
            res.status(201).json({ msg: "Article Created Successfuly" });
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateArticle = async (req, res) => {
    const article = await Article.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!article) return res.status(404).json({ msg: "Data tidak ditemukan" });

    let fileName = "";
    if (req.files === null) {
        fileName = Article.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Format image tidak sesuai" });
        if (fileSize > 5000000) return res.status(422).json({ msg: "Ukuran maksimal image hanya 5 MB" });

        const filepath = `./public/imagesArticle/${article.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/imagesArticle/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }

    const name = req.body.author;   
    const date = req.body.date;
    const title = req.body.title;
    const content = req.body.content;
    const url = `${req.protocol}://${req.get("host")}/imagesArticle/${fileName}`;

    try {
        await Article.update({ name: name, image: fileName, url: url, date: date, title: title, content: content }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Article Updated Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteArticle = async (req, res) => {
    const article = await Article.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!article) return res.status(404).json({ msg: "No Data Found" });

    try {
        const filepath = `./public/imagesArticle/${article.image}`;
        fs.unlinkSync(filepath);
        await Article.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Article Deleted Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}

