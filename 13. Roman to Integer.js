/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var map={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
        }
        
       var sum=0;
        
       for(let i =0 ;i<s.length;i++)
           {
               var c1=map[s[i]];
               var c2=map[s[i+1]];
               
               if(c2>c1)
                   {
                       sum=sum+c2-c1;
                       i++;
                   }
               else{
                       sum=sum+c1;
                   
                }
                
              
           }
        
         return sum;
    
};