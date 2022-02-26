export const fillDeleteFile = (fildName: string) =>
    `/* DO NOT EDIT - generated */
import { ${fildName}Model } from '../../generated/model';
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-native';

const deleteHandler = (db: Db) => (input: any) =>
db
    .collection<${fildName}Model>('${fildName}')
    .deleteOne({ _id: input.arguments.details._id });

export const handler = makeHandler({ handlerFactory: deleteHandler });
`;
