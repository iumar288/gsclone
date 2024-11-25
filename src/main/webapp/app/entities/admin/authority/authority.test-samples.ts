import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'cc9f1120-ecff-465f-9431-56f3cd5a5e11',
};

export const sampleWithPartialData: IAuthority = {
  name: 'c3fb2a5f-de66-4f99-b837-4ee9575fa7af',
};

export const sampleWithFullData: IAuthority = {
  name: '9281d5c8-ac75-4c22-8d96-99d3e5f76562',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
