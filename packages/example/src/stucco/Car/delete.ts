/* DO NOT EDIT - generated */
import { CarModel, CarModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
    arguments: { details: CarModelDetails };
  };

const deleteHandler = (db: Db) => (input: InputModel) =>
db
    .collection<CarModel>('Car')
    .deleteOne({ _id: new ObjectId(input.arguments.details._id) })
    .then((res) => res.deletedCount > 0);

export const handler = makeHandler({ handlerFactory: deleteHandler });
