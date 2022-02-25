export const fillUpdateFile = (fildName: string) =>
    `import { ${fildName}Model } from '../../generated/model';
import { mc } from 'graphbase-native';

export default async (input: any) => {
    const { db } = await mc();
    const res = await db
        .collection<${fildName}Model>('${fildName}')
        .updateOne({ _id: input.arguments.details.id}, { ...input.arguments });
    return res.modifiedCount;
};
`;
