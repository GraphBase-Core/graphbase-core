export type InterestsModel = { name: string; description: string | undefined };
export type PersonModelDetails = { _id: string };
export type PersonModelWithId = PersonModelDetails & PersonModel;
export type CarModel = {
  mark: string;
  price: number;
  model: string | undefined;
  interests: string | undefined;
};
export type CarModelDetails = { _id: string };
export type CarModelWithId = CarModelDetails & CarModel;
export type PersonModel = {
  firstName: string;
  lastName: string;
  age: number;
  someFloat: number | undefined;
  someBoolean: boolean | undefined;
};
export type CarModel = {
  mark: string;
  price: number;
  model: string | undefined;
};
export type PersonModelDetails = { _id: string };
export type CarModelWithId = CarModelDetails & CarModel;
export type CarModelDetails = { _id: string };
export type PersonModelWithId = PersonModelDetails & PersonModel;
