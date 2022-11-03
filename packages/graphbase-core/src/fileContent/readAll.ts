export const fillReadAllFile = (fieldName: string) =>
    `/* DO NOT EDIT - generated */
import { Db } from 'mongodb';
import { makeHandler } from 'graphbase-core';
import { ${fieldName}Model } from '../../models/models';

const readAllHandler = (db: Db) => () =>
    db.collection<${fieldName}Model>('${fieldName}')
    .find()
    .toArray()
    .then((res) => res.map((i) => ({ ...i, _id: i._id.toString() })));
    
export const handler = makeHandler({ handlerFactory: readAllHandler });
`;
