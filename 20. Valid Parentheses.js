/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    
    if(!s)
        {
            return true;
        }
    var stack=[];
    
    var left =['(','{','['];
    var right =[')','}',"]"];
    
    var match= {
        
        ')':'(',
        '}':'{',
        ']':'['      
    };
    
    for(var i in s)
        {
            if(left.indexOf(s[i])>-1) // 有符合left array 中的元素
                {
                    stack.push(s[i]); //將其push 到stack 
                }
                
            
            if(right.indexOf(s[i])>-1)
                {
                    var stackpop =stack.pop();
                    if(match[s[i]]!=stackpop)
                        {
                            return false;                           
                        }
                }
                   
        }
            return stack.length==0? true:false ;
};