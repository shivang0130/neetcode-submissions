class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0)
            return 0;

        let set = new Set(nums)
        let longest =1;

        for(let num of nums){

            if (!set.has(num - 1)) {

                    let currentNum = num;
                    let count = 1;

                    // Find consecutive numbers
                    while (set.has(currentNum + 1)) {
                        currentNum++;
                        count++;
                    }

                    longest = Math.max(longest, count);
            }
        }
        return longest;
    }
}
