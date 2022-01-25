import express from 'express';
import ClientRoutes from './client.routes';
import ProductRoutes from './product.routes';

const Routes = express.Router();

Routes.use(ProductRoutes);
Routes.use(ClientRoutes);

export default Routes;
