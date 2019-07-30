/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let hash_table={};
    let array_len=nums.length;
    
    for(i=0;i<array_len;i++){
        
        let diff =target-nums[i];
        
        if(diff in hash_table){
            return[hash_table[diff],i];
        }
        else{
             hash_table[nums[i]]=i;   
            }
    }
    
};