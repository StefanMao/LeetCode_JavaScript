/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
  if(strs.length<1)
      {
          return "";
      }
    else if(strs.length==1)
        {
            return strs[0];
                
        }
    else if(strs.length>1)
        {
            const arr= strs.concat().sort();
 
             const a1= arr[0];  
  
             const a2= arr[arr.length-1];
 
            const L= a1.length;
    
            let i= 0;
             while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
             return a1.substring(0, i);
                      
        }


}