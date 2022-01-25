import { Request, Response } from 'express';

export interface BaseController {
  findAll: (req: Request, res: Response) => void;
  findById: (req: Request, res: Response) => void;
  create: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
}
