import * as productService from '../services/productService.js';

export async function getProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getProductById(req, res) {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createProduct(req, res) {
  try {
    const { name, type, cost } = req.body;
    const newProduct = await productService.createProduct(name, type, cost);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function updateProduct(req, res) {
  try {
    const { name, type, cost } = req.body;
    const updated = await productService.updateProduct(req.params.id, name, type, cost);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
