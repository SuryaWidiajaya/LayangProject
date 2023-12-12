import express from "express";
import {
    getServices,
    getServiceById,
    saveService,
    updateService,
    deleteService
} from "../controllers/ServiceController.js";

const router = express.Router();

router.get('/services', getServices);
router.get('/services/:id', getServiceById);
router.post('/services', saveService);
router.patch('/services/:id', updateService);
router.delete('/services/:id', deleteService);

export default router;