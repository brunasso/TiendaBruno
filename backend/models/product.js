import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        registerDate: {type: Date, default: Date.now},
        price: Number,
        stock: Number
    }
)

const product = mongoose.model("product", productSchema);

export default product;