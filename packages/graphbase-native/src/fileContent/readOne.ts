export const fillReadOneFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model,  ${fildName}ModelDetails } from '../../generated/model';
import { Db, ObjectId } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { details: ${fildName}ModelDetails };
};

const readOneHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<${fildName}Model>('${fildName}')
    .findOne({ _id: new ObjectId(input.arguments.details._id) })
    .then((i) => ({ ...i, _id: i?._id.toString() }));

export const handler = makeHandler({ handlerFactory: readOneHandler });
`;
