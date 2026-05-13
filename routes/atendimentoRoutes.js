import express from "express"
const router = express.Router();
import { authMiddleware } from "../middlewares/authMiddleware.js"

import {
    createUserController,
    findyManyUserController,
    updatedUserController,
    deleteUserController
} from "../controller/controllers.js"

router.post("/usuarios",authMiddleware, createUserController)
router.get("/usuarios",authMiddleware, findyManyUserController)
router.put("/usuarios/:id",authMiddleware, updatedUserController)
router.delete("/usuarios/:id",authMiddleware, deleteUserController)

export default router


