class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let sets : Set<number> = new Set();
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
