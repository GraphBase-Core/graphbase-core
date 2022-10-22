export const fillCreateFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}CreateModel } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler, FieldResolveInput } from 'graphbase-core';

type InputModel = Omit<FieldResolveInput, 'arguments'> & {
  arguments: { ${fildName.toLowerCase()}: ${fildName}CreateModel  };
};

const createHandler = (db: Db) => (input: InputModel) =>
  db
    .collection<${fildName}CreateModel>('${fildName}')
    .insertOne({ ...input.arguments.${fildName.toLowerCase()} })
    .then((res) => res.insertedId.toString());

export const handler = makeHandler({ handlerFactory: createHandler });
`;
