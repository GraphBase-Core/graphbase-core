import { CarModel } from '../../generated/model';
import { mc, FieldResolveInput } from 'graphbase-native';

export default async (input: FieldResolveInput) => {
  const { db } = await mc();
  const res = await db
    .collection<CarModel>('Car')
    .insertOne({ ...(input.arguments as CarModel) });
  return res.insertedId;
};
