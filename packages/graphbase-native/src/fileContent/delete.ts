export const fillDeleteFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model, ${fildName}ModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
    arguments: { details: ${fildName}ModelDetails };
  };

const deleteHandler = (db: Db) => (input: InputModel) =>
db
    .collection<${fildName}Model>('${fildName}')
    .deleteOne({ _id: new ObjectId(input.arguments.details._id) })
    .then((res) => res.deletedCount > 0);

export const handler = makeHandler({ handlerFactory: deleteHandler });
`;
