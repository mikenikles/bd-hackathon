import {
    makeRequest,
} from '../utils/utils'

export function loadProduct(skuNumber) {
  var headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key':'7b516dad0ce0472ea0fa4c0be3b2fcb2'
  };

  // make request
  return makeRequest('https://api.builddirect.io/products/' + skuNumber, { mode: 'cors', headers: headers})
  .then((response) => response.json());
}
