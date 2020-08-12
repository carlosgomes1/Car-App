import { Request, Response } from 'express';
import connection from '../database/connection';

class CarController {
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(402).json({ error: 'id is required' });
    }

    await connection('cars')
      .where({
        id,
      })
      .delete();

    return response.json({ Message: 'Success' });
  }

  async indexCarsOfUser(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(402).json({ error: 'id is required' });
    }

    const cars = await connection('cars').where({
      user_id: id,
    });

    return response.json(cars);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(402).json({ error: 'id is required' });
    }

    const car = await connection('cars').where('id', Number(id)).first();
    const { name } = await connection('users').where('id', car.user_id).first();

    if (!car) {
      return response.status(404).json({ error: 'Car not found' });
    }

    return response.json({ car, name });
  }

  async index(request: Request, response: Response) {
    const cars = await connection('cars');

    return response.json(cars);
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.headers;
    const { brand, model, year, km, value, additional = '' } = request.body;

    if (!user_id) {
      return response.status(402).json({ error: 'user_id is required' });
    }

    if (!brand || !model || !year || !km || !value) {
      return response.status(401).json({ error: 'Information not filled' });
    }

    await connection('cars').insert({
      brand,
      model,
      year,
      km,
      value,
      additional,
      user_id,
    });

    return response.json({ message: 'Success!' });
  }
}

export default new CarController();
