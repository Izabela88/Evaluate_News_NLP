
function ValidURL(formText) {

  const expression = /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g;
  const regex = new RegExp(expression);

  if (formText.match(regex)) {
    alert("Correct URL address!");
    return true
  } else {
    alert("Incorrect URL address! Make sure your address starts from www or http or https.");
    return false
  }
};
export { ValidURL }