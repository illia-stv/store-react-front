// import {isEmail} from '../functions/isEmail'
// import {test, expect} from 'jest'
import {isEmail} from '../functions/isEmail'
import {isName} from '../functions/isName'
import {isPassword} from '../functions/isPassword'



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


test('username validation 1', () => {
    expect(isName('ilya')).toEqual(false)
})
  

test('username validation 2', () => {
    expect(isName('ilya1074')).toEqual(true)
})


test('password validation 1', () => {
    expect(isPassword('Aszxcvbn1234')).toEqual(true)
})


test('password validation 2', () => {
    expect(isPassword('aA1')).toEqual(false)
})


test('password validation 3', () => {
    expect(isPassword('ilyaasdasdasd')).toEqual(false)
})


test('password validation 4', () => {
    expect(isPassword('123243523452')).toEqual(false)
})


test('password validation 5', () => {
    expect(isPassword('AASDASDASDASDAS')).toEqual(false)
})








// test('Does it email valid', () => {
//     expect(isEmail('ilya@sheremetov.com')).toBe(true);
//   });