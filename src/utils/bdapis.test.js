import {
    loadProduct,
} from './bdapis'

it('load a product', async () => {
  // make request
  const product = await loadProduct('10082137')
  expect(product).toBeTruthy()
})
