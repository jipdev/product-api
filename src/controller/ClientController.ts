import { Request, Response } from 'express';
import { ERROR_MESSAGES } from '../constants/error-messages';
import ClientService from '../services/ClientService';
import { BaseController } from './BaseController';

class ClientController implements BaseController {
  create(req: Request, res: Response): void {
    ClientService.create(req.body)
      .then((client) => res.json(client))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }

  findAll(req: Request, res: Response): void {
    ClientService.findAll()
      .then((data) => res.json(data))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }

  findById(req: Request, res: Response): void {
    ClientService.findById(req.params.id)
      .then((client) => res.json(client))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }

  remove(req: Request, res: Response): void {
    ClientService.remove(req.params.id)
      .then((client) => res.json(client))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }

  update(req: Request, res: Response): void {
    ClientService.update(req.params.id, req.body)
      .then((client) => res.json(client))
      .catch((e) => res.status(500).send(ERROR_MESSAGES.GENERIC));
  }
}

export default new ClientController();
