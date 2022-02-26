export const fillCreateFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-native';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { ${fildName.toLowerCase()}: ${fildName}Model  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<${fildName}Model>('${fildName}')
    .insertOne({ ...input.arguments.${fildName.toLowerCase()} })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
`;
