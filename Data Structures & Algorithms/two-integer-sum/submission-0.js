class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashSet = new Map();
        
        for(let i=0; i<nums.length; i++){
            let diff = target - nums[i];

            if(hashSet.has(diff)){
                return[i,hashSet.get(diff)];
            }

            hashSet.set(nums[i],i);
        }

        return [];
    }
}
