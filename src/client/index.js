import { ValidURL } from './js/urlChecker';
import { handleSubmit } from './js/formHandler';
import { postData, getData, updateInterface } from './js/formHandler'
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
console.log(ValidURL);
console.log(handleSubmit);

export {
  handleSubmit,
  ValidURL,
  postData,
  getData,
  updateInterface
}