/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  var reversed = "";
  if (str){
    for (var i = 0; i < str.length; i++){
      reversed += str[str.length - i];
    }
  }
  else {
    throw "Error, string empty!";
    return 0;
  }

  return reversed;
};

export default turnMeBaby;
