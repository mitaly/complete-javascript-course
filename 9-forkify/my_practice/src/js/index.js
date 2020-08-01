import str from './models/Search';
import {add, multiply, ID} from './views/searchView';
// import {add as a, multiply as m, ID as id} from './views/searchView.js';
// import * as searchView from './views/searchView';

console.log(`Add = ${add(ID, 2)} and multiply = ${multiply(9, 8)}. Got string from Search model = ${str}`);

// console.log(`Add = ${a(id, 2)} and multiply = ${m(9, 8)}. Got string from Search model = ${str}`);

// console.log(`Add = ${searchView.add(searchView.ID, 2)} and multiply = ${searchView.multiply(9, 8)}. Got string from Search model = ${str}`)