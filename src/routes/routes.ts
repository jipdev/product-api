import express from 'express';
import ProductRoutes from './product-routes';

const Routes = express.Router();

Routes.use(ProductRoutes);

export default Routes;
