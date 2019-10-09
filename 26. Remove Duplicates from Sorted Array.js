/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    
    if(nums.length <2)
        return nums.length;
    else
        {
            var x = 0;
            var y = 1;
            
            while (y<nums.length)
                {
                    
                    if(nums[x]===nums[y]) //重複
                    {
                      y++;
                        
                    }
                    else
                        {
                            x++;
                            nums[x]=nums[y];
                            y++;                                                
                        }                    
                }
            
                return x+1;
            
        }
    
    
    
    
};