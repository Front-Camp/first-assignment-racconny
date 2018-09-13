/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
    var result = new Array();
    for(var i = 0; i < arr.length - 1; i++){
      for (var current in arr[i]){
        result.push(current);
      }
    }
    return result;
};

export default getFlags;
