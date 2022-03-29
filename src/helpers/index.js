import {
  fetchFoodsFirstLetter,
  fetchFoodsIngredients,
  fetchFoodsName,
} from './fetchFoodAPI';

import {
  fetchDrinksFirstLetter,
  fetchDrinksIngredients,
  fetchDrinksName,
} from './fetchDrinkAPI';

export const minPasswordLength = 6;

export const requestFoodObject = {
  'ingredient-search': (searchInput) => fetchFoodsIngredients(searchInput),
  'name-search': (searchInput) => fetchFoodsName(searchInput),
  'first-letter-search': (searchInput) => fetchFoodsFirstLetter(searchInput),
  '': () => global.alert('Select any option'),
};

export const requestDrinkObject = {
  'ingredient-search': (searchInput) => fetchDrinksIngredients(searchInput),
  'name-search': (searchInput) => fetchDrinksName(searchInput),
  'first-letter-search': (searchInput) => fetchDrinksFirstLetter(searchInput),
  '': () => global.alert('Select any option'),
};
