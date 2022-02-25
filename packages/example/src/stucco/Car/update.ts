import { CarModel } from '../../generated/model';
import { mc } from 'graphbase-native';

export default async (input: any) => {
    const { db } = await mc();
    const res = await db
        .collection<CarModel>('Car')
        .updateOne({ _id: input.arguments.details.id}, { ...input.arguments });
    return res.modifiedCount;
};
