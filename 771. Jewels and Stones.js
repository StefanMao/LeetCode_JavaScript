/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
    
    var count=0;
    
    var J_s=J.split("");
    
    
    for(var i = 0;i<J.length;i++)
        {
            if(S.indexOf(J_s[i])==-1)
                {
                    continue;
                }
            
            var reg = new RegExp(J_s[i],'g');
            
            
            count+=S.match(reg).length;
            
        }
    return count;
    
};