// import {isEmail} from '../functions/isEmail'
// import {test, expect} from 'jest'
import reducer, {setMyCategories, setJwt, setCart} from '../reducer/reducer'
import {isEmail} from '../functions/isEmail'


test('email validation 1', () => {
  expect(isEmail('ilya@sheremetov.com')).toEqual(true)
})


test('email validation 2', () => {
  expect(isEmail('ilya@.com')).toEqual(false)
})


test('email validation 3', () => {
  expect(isEmail('ilya@sheremetov .com')).toEqual(false)
})


test('email validation 4', () => {
  expect(isEmail('ilyasheremetov.com')).toEqual(false)
})

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      jwt: localStorage.getItem('jwt') || false,
      myCategories: [],
      cart: []
    }
  )
})


test('should handle a categories list', () => {
  expect(reducer(undefined, setMyCategories(['mac']))).toEqual({
    jwt: localStorage.getItem('jwt') || false,
    myCategories: ['mac'],
    cart: []
  })
})


test('should set a jwt list', () => {
  expect(reducer(undefined, setJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI2MzU0MzQxLCJleHAiOjE2Mjg5NDYzNDF9.leCvt2NB1g7vlKTZ68hS6Rs6RX5ED7inhGAyTNVJF74'))).toEqual({
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI2MzU0MzQxLCJleHAiOjE2Mjg5NDYzNDF9.leCvt2NB1g7vlKTZ68hS6Rs6RX5ED7inhGAyTNVJF74',
    myCategories: [],
    cart: []
  })
})

test('should add product to list', () => {
  expect(reducer(undefined, setCart(['product']))).toEqual({
    jwt: localStorage.getItem('jwt') || false,
    myCategories: [],
    cart: ['product']
  })
})




// test('Does it email valid', () => {
//     expect(isEmail('ilya@sheremetov.com')).toBe(true);
//   });