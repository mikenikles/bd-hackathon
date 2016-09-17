import {
    loadProduct,
} from '../utils/bdapis'

it('load a product', () => {
  // make request
  var product = loadProduct('10082137');

  expect(product).not.toBeNull();
  expect(product).toBe(true);
});
