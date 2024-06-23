import { Router } from "express";
import { get, getAll, gete } from "../controllers/controller.mjs";

const router = Router()


router.route("/").get(gete)

export default router