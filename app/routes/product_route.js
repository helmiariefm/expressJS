import { Router } from "express";
import {
  get_product,
  get_products,
  add_product,
  update_product,
  delete_product,
} from "../controllers/product_controller.js";

const router = Router();

router.get("/", get_products);

router.get("/:product_id", get_product);

router.post("/", add_product);

router.put("/:product_id", update_product);

router.delete("/:product_id", delete_product);

export default router;
