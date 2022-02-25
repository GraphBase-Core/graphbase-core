import { PersonModel } from '../../generated/model';
import { mc } from 'graphbase-native';

export default async (input: any) => {
    const { db } = await mc();
    const res = await db.collection<PersonModel>('Person').insertOne({ ...(input.arguments as PersonModel) });
    return res.insertedId;
};
