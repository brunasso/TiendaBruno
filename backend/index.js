import express from 'express'
import cors from 'cors'
import db from './db/db.js'
import dotenv from 'dotenv'
import producto from './routes/product.js'
dotenv.config();

const app = express();
//Comentario
app.use(express.json());
app.use(cors());
app.use("/api/products", producto);

app.listen(process.env.PORT, () => console.log(`Connecting server running on port ${process.env.PORT}`))
db.dbConnection();