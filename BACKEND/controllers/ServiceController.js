import Service from "../models/ServiceModal.js";
import path from "path";
import fs from "fs";

export const getServices = async (req, res) => {
    try {
        const response = await Service.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getServiceById = async (req, res) => {
    try {
        const response = await Service.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveService = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "Mohon lengkapi data" });
    const name = req.body.nama;
    const nik = req.body.nik;
    const ttl = req.body.ttl;
    const agama = req.body.agama;
    const status = req.body.status;
    const alamat = req.body.alamat;
    const jenis = req.body.jenis;
    const proses = req.body.proses;

    const fileKtp = req.files.fileKtp;
    const fileSizeKtp = fileKtp.data.length;
    const extKtp = path.extname(fileKtp.name);
    const fileNameKtp = `${Date.now()}_${fileKtp.md5}${extKtp}`;
    const urlKtp = `${req.protocol}://${req.get("host")}/imagesKtp/${fileNameKtp}`;
    const allowedTypeKtp = ['.png', '.jpg', '.jpeg'];

    if (!allowedTypeKtp.includes(extKtp.toLowerCase())) return res.status(422).json({ msg: "Format image tidak sesuai" });
    if (fileSizeKtp > 5000000) return res.status(422).json({ msg: "Ukuran maksimal image hanya 5 MB" });

    fileKtp.mv(`./public/imagesKtp/${fileNameKtp}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });

        const fileKk = req.files.fileKk;
        const fileSizeKk = fileKk.data.length;
        const extKk = path.extname(fileKk.name);
        const fileNameKk = `${Date.now()}_${fileKk.md5}${extKk}`;
        const urlKk = `${req.protocol}://${req.get("host")}/imagesKk/${fileNameKk}`;    
        const allowedTypeKk = ['.png', '.jpg', '.jpeg'];

        if (!allowedTypeKk.includes(extKk.toLowerCase())) return res.status(422).json({ msg: "Format image tidak sesuai" });
        if (fileSizeKk > 5000000) return res.status(422).json({ msg: "Ukuran maksimal image hanya 5 MB" });

        fileKk.mv(`./public/imagesKk/${fileNameKk}`, async (err) => {
            if (err) return res.status(500).json({ msg: err.message });
            try {
                await Service.create({ nama: name, nik: nik, ttl: ttl, agama: agama, status: status, alamat: alamat, ktp: fileNameKtp, urlKtp: urlKtp, kk: fileNameKk, urlKk: urlKk, proses: proses, jenis: jenis });
                res.status(201).json({ msg: "Service Created Successfully" });
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ msg: "Gagal membuat service" });
            }
        });
    });

}

export const updateService = async (req, res) => {
    try {
        const service = await Service.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!service) return res.status(404).json({ msg: "Data tidak ditemukan" });

        let fileNameKtp = service.ktp;
        let fileNameKk = service.kk;

        if (req.files !== null) {
            const fileKtp = req.files.fileKtp;
            const fileSizeKtp = fileKtp.data.length;
            const extKtp = path.extname(fileKtp.name);
            let fileNameKtp = `${Date.now()}_${fileKtp.md5}${extKtp}`;
            const allowedTypeKtp = ['.png', '.jpg', '.jpeg'];

            if (!allowedTypeKtp.includes(extKtp.toLowerCase())) return res.status(422).json({ msg: "Format image tidak sesuai" });
            if (fileSizeKtp > 5000000) return res.status(422).json({ msg: "Ukuran maksimal image hanya 5 MB" });

            const filepathKtp = `./public/imagesKtp/${service.ktp}`;
            fs.unlinkSync(filepathKtp);

            fileKtp.mv(`./public/imagesKtp/${fileNameKtp}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            });

            const fileKk = req.files.fileKk;
            const fileSizeKk = fileKk.data.length;
            const extKk = path.extname(fileKk.name);
            let fileNameKk = `${Date.now()}_${fileKk.md5}${extKk}`;
            const allowedTypeKk = ['.png', '.jpg', '.jpeg'];

            if (!allowedTypeKk.includes(extKk.toLowerCase())) return res.status(422).json({ msg: "Format image tidak sesuai" });
            if (fileSizeKk > 5000000) return res.status(422).json({ msg: "Ukuran maksimal image hanya 5 MB" });

            const filepathKk = `./public/imagesKk/${service.kk}`;
            fs.unlinkSync(filepathKk);

            fileKk.mv(`./public/imagesKk/${fileNameKk}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            });
        }

        const name = req.body.nama;
        const nik = req.body.nik;
        const ttl = req.body.ttl;
        const agama = req.body.agama;
        const status = req.body.status;
        const alamat = req.body.alamat;
        const jenis = req.body.jenis;
        const proses = req.body.proses;
        const urlKtp = `${req.protocol}://${req.get("host")}/imagesKtp/${fileNameKtp}`;
        const urlKk = `${req.protocol}://${req.get("host")}/imagesKk/${fileNameKk}`;

        await Service.update(
            {
                nama: name,
                nik: nik,
                ttl: ttl,
                agama: agama,
                status: status,
                alamat: alamat,
                ktptp: fileNameKtp,
                urlKtp: urlKtp,
                kk: fileNameKk,
                urlKk: urlKk,
                proses: proses,
                jenis: jenis
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        res.status(200).json({ msg: "Service Updated Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}


export const deleteService = async (req, res) => {
    const service = await Service.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!service) return res.status(404).json({ msg: "No Data Found" });

    try {
        const filepathKtp = `./public/imagesKtp/${service.ktp}`;
        const filepathKk = `./public/imagesKk/${service.kk}`;
        fs.unlinkSync(filepathKtp);
        fs.unlinkSync(filepathKk);
        await Service.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Service Deleted Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}