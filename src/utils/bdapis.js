import {
    makeRequest,
} from '../utils/utils'

const headers = {
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key':'7b516dad0ce0472ea0fa4c0be3b2fcb2'
};

export function loadProduct(skuNumber) {
  return makeRequest('https://api.builddirect.io/products/' + skuNumber, { mode: 'cors', headers: headers})
  .then((response) => response.json());
}

export function searchProduct(searchTerm) {
  return makeRequest('https://api.builddirect.io/products/?query=' + searchTerm, { mode: 'cors', headers: headers})
  .then((response) => response.json());
}

export function loadProductRatings(skuNumber) {
  return makeRequest('https://api.builddirect.io/products/' + skuNumber + '/ratings', { mode: 'cors', headers: headers})
  .then((response) => response.json());
}
