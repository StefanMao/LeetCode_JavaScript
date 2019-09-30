/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;
    
   
  let reverse_array=x.toString()
  let orgin_array=reverse_array.split('')
  let test_array=reverse_array.split('').reverse()
  return reverse_array===test_array.join('') ? true:false
    

    
};
