/* DO NOT EDIT - generated */
import { CarModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { car: CarModel  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<CarModel>('Car')
    .insertOne({ ...input.arguments.car })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
