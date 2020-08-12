import { Request, Response } from 'express';
import connection from '../database/connection';

class SessionController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await connection('users')
      .where({
        email: email,
        password: password,
      })
      .first();

    if (!user) {
      return response.status(401).json({ error: 'Invalid credentials' });
    }

    return response.json({
      id: user.id,
      email: user.email,
    });
  }
}

export default new SessionController();
