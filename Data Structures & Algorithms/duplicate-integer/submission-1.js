class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sets  = new Set();

        for(let num of nums){
            if(sets.has(num)){
                return true;
            }else{
                sets.add(num);
            }
        }

        return false;
    }
}
