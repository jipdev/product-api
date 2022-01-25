import express from 'express';
import ProductController from '../controller/ProductController';

const ProductRoutes = express.Router();

ProductRoutes.get('/clientes', ProductController.findAll);
ProductRoutes.get('/clientes/:id', ProductController.findById);
ProductRoutes.post('/clientes', ProductController.create);
ProductRoutes.put('/clientes/:id', ProductController.update);
ProductRoutes.delete('/clientes/:id', ProductController.remove);

export default ProductRoutes;
