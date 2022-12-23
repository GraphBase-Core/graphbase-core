/* DO NOT EDIT - generated */
export type InterestsModel = {name:string,
description:string | undefined};
export type InterestsCreateModel = {name:string,
description:string | undefined};
export type InterestsUpdateModel = {name:string | undefined,
description:string | undefined};
export type InterestsModelWithId = InterestsModel & {_id: string};
export type PersonModel = {firstName:string,
lastName:[string],
age:number,
height:number | undefined,
hasDrivingLicenses:boolean | undefined,
interests:[InterestsModelWithId]};
export type PersonCreateModel = {firstName:string,
lastName:[string],
age:number,
height:number | undefined,
hasDrivingLicenses:boolean | undefined,
interests:[string]};
export type PersonUpdateModel = {firstName:string | undefined,
lastName:[string] | undefined,
age:number | undefined,
height:number | undefined,
hasDrivingLicenses:boolean | undefined,
interests:[string] | undefined};
export type PersonModelWithId = PersonModel & {_id: string};
export type CarModel = {mark:string | undefined,
price:number | undefined,
model:[string | undefined] | undefined};
export type CarCreateModel = {mark:string | undefined,
price:number | undefined,
model:[string | undefined] | undefined};
export type CarUpdateModel = {mark:string | undefined,
price:number | undefined,
model:[string | undefined] | undefined};
export type CarModelWithId = CarModel & {_id: string};
