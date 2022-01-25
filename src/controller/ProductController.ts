import { Request, Response } from 'express';
import { ERROR_MESSAGES } from '../constants/error-messages';
import ProductService from '../services/ProductService';
import { BaseController } from './BaseController';

class ProductController implements BaseController {
  create(req: Request, res: Response): void {
    ProductService.create(req.body)
      .then((product) => res.json(product))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }

  findAll(req: Request, res: Response): void {
    ProductService.findAll()
      .then((data) => res.json(data))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }

  findById(req: Request, res: Response): void {
    ProductService.findById(req.params.id)
      .then((product) => res.json(product))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }

  remove(req: Request, res: Response): void {
    ProductService.remove(req.params.id)
      .then((product) => res.json(product))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }

  update(req: Request, res: Response): void {
    ProductService.update(req.params.id, req.body)
      .then((product) => res.json(product))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }
}

export default new ProductController();
