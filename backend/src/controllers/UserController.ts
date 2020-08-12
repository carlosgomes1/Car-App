import { Request, Response } from 'express';
import connection from '../database/connection';

class UserController {
  async index(request: Request, response: Response) {
    const users = await connection('users');

    return response.json(users);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(402).json({ error: 'id is required' });
    }

    const user = await connection('users').where('id', Number(id)).first();

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json({
      email: user.email,
      name: user.name,
      whatsapp: user.whatsapp,
      uf: user.uf,
      city: user.city,
    });
  }

  async create(request: Request, response: Response) {
    const { name, password, whatsapp, email, uf, city } = request.body;

    const emailExist = await connection('users').where('email', email);

    if (emailExist.length !== 0) {
      return response.status(409).json({ error: 'E-mail already being used' });
    }

    await connection('users').insert({
      name,
      password,
      whatsapp,
      email,
      uf,
      city,
    });

    response.json({ message: 'User created!' });
  }
}

export default new UserController();
