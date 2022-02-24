export const fillCreateFile = (fildName: string) =>
    `import { FieldResolveInput } from 'stucco-js';
import { CarModel } from '../../generated/model';
import { mc } from '../../db/mongoDB/connection';

export default async (input: FieldResolveInput) => {
    console.log(${fildName.valueOf()})
    const { db } = await mc();
    const res = await db.collection<CarModel>('CarModel').insertOne(input.arguments as CarModel);
    return res.insertedId;
};
`;
