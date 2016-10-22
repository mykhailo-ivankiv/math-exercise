import {Schema, arrayOf} from 'normalizr';

export const task = new Schema('task', { idAttribute: '_id' });
export const arrayOfTask = arrayOf(task);

export const service = new Schema('service', { idAttribute: '_id' });
export const arrayOfServices = arrayOf(service);

export const user = new Schema('user', { idAttribute: '_id' });
export const arrayOfUsers = arrayOf(user);

export const house = new Schema('house', { idAttribute: '_id' });
export const arrayOfHouses = arrayOf(house);