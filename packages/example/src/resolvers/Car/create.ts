/* DO NOT EDIT - generated */
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';
import { CarCreateModel } from '../../models/models';


type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { car: CarCreateModel  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<CarCreateModel>('Car')
    .insertOne({ ...input.arguments.car })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
