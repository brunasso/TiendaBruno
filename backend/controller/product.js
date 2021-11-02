import product from '../models/product.js'

const registerProduct = async(req, res) => {
    if (!req.body.name || !req.body.description || typeof(req.body.price) != "number" || typeof(req.body.stock) != "number") res.status(400).send("Incomplete data")

    const existingProduct = await product.findOne({name: req.body.name});
    if(existingProduct) return res.status(400).send("The product already exist")

    const productSchema = new product({
        name: req.body.name,
        description: req.body.description,
        price : req.body.price,
        stock: req.body.stock,
        dbStatus: true
    });

    const result = await productSchema.save();
    if(!result) return res.status(400).send("Failed to save product.")

    return res.status(200).send({result});
}

export default { registerProduct };