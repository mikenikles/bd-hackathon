import {
    makeRequest,
} from '../utils/utils'

it('makes a remote call', () => {
  var headers = new Headers({
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key':'7b516dad0ce0472ea0fa4c0be3b2fcb2'
  })

  // fetch direct
  fetch('https://api.builddirect.io/products/10082137', {
	  method: 'GET',
	  headers: headers
  }).then((response) => response.status)
  .then((status) => {
      expect(status).toBe(200);
  });

  // make request
  makeRequest('https://api.builddirect.io/products/10082137', { headers: headers})
  .then((response) => response.status)
  .then((status) => {
      expect(status).toBe(200);
  });
});
