
function ValidURL(formText) {

  const expression = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
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