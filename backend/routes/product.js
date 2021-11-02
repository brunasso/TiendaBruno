import express  from "express";
import product from "../controller/product.js";
const router = express.Router();


//http://localhost:3001/api/products/registerProduct

router.post("/registerProduct", product.registerProduct);

export default router;