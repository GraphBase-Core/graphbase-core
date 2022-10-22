export type InterestsModel = {name:string,
description:string | undefined};
export type InterestsCreateModel = {name:string,
description:string | undefined};
export type InterestsUpdateModel = {name:string | undefined,
description:string | undefined};
export type InterestsModelDetails = {_id:string};
export type InterestsModelWithId = InterestsModelDetails & InterestsModel;
export type PersonModel = {firstName:string,
lastName:string,
age:number,
someFloat:number | undefined,
someBoolean:boolean | undefined,
interests:InterestsModelWithId};
export type PersonCreateModel = {firstName:string,
lastName:string,
age:number,
someFloat:number | undefined,
someBoolean:boolean | undefined,
interests:string};
export type PersonUpdateModel = {firstName:string | undefined,
lastName:string | undefined,
age:number | undefined,
someFloat:number | undefined,
someBoolean:boolean | undefined,
interests:string | undefined};
export type PersonModelDetails = {_id:string};
export type PersonModelWithId = PersonModelDetails & PersonModel;
export type CarModel = {mark:string | undefined,
price:number | undefined,
model:[string | undefined] | undefined};
export type CarCreateModel = {mark:string | undefined,
price:number | undefined,
model:[string | undefined] | undefined};
export type CarUpdateModel = {mark:string | undefined,
price:number | undefined,
model:[string | undefined] | undefined};
export type CarModelDetails = {_id:string};
export type CarModelWithId = CarModelDetails & CarModel;
