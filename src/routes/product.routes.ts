import express from 'express';
import ProductController from '../controller/ProductController';

const ProductRoutes = express.Router();

ProductRoutes.get('/produtos', ProductController.findAll);
ProductRoutes.get('/produtos/:id', ProductController.findById);
ProductRoutes.post('/produtos', ProductController.create);
ProductRoutes.put('/produtos/:id', ProductController.update);
ProductRoutes.delete('/produtos/:id', ProductController.remove);

export default ProductRoutes;
