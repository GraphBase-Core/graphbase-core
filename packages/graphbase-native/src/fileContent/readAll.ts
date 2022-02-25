export const fillReadAllFile = (fildName: string) =>
    `import { ${fildName}Model } from '../../generated/model';
import { mc } from 'graphbase-native';

export default async () => {
    const { db } = await mc();
    const res = await db.collection<${fildName}Model>('${fildName}').find().toArray();
    return res;
};
`;
