import { PersonModel } from '../../generated/model';
import { mc } from 'graphbase-native';

export default async (input: any) => {
    const { db } = await mc();
    const res = await db.collection<PersonModel>('Person').findOne({ _id: input.arguments.details._id });
    return res;
};
