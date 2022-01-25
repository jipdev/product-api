import express from 'express';
import ClientController from '../controller/ClientController';

const ClientRoutes = express.Router();

ClientRoutes.get('/clientes', ClientController.findAll);
ClientRoutes.get('/clientes/:id', ClientController.findById);
ClientRoutes.post('/clientes', ClientController.create);
ClientRoutes.put('/clientes/:id', ClientController.update);
ClientRoutes.delete('/clientes/:id', ClientController.remove);

export default ClientRoutes;
