
import { postData } from '../js/formHandler';
test('This is postData test', async () => {
  expect(postData).toBeDefined();
});

import { getData } from '../js/formHandler';
test('This is postData test', async () => {
  expect(getData).toBeDefined();
});

let trueUrl = "https://www.google.co.uk";
import { ValidURL } from '../js/urlChecker';
test('The data is true', () => {
  const valid = ValidURL(trueUrl)
  return expect(valid).toBeTruthy();
});





