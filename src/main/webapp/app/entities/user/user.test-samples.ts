import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'c28e3113-28f0-4084-8dc9-a616f1a38a05',
  login: 'qgCK',
};

export const sampleWithPartialData: IUser = {
  id: 'fc2d21bd-238f-406c-9a64-68d3bc7229b9',
  login: '}Esby3@mG2F\\F0BNn\\bxO\\!aatm3H',
};

export const sampleWithFullData: IUser = {
  id: 'f0f42f9a-c27c-47b5-99fb-e744018320a1',
  login: '5e',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
