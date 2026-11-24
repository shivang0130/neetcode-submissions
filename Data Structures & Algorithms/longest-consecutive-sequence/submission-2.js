class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0)
            return 0;

        nums.sort((a,b) => a-b);
        let n = nums.length;

        let maxLength = 1;
        let nowMaxLen=1;

        for(let j=1; j<n; j++){
            if(nums[j] === nums[j-1]){
                continue;
            }

            if(nums[j]=== nums[j-1]+1){
                nowMaxLen++;
            }else{
                maxLength= Math.max(maxLength,nowMaxLen);
                nowMaxLen = 1;
            }
        }
        maxLength= Math.max(maxLength,nowMaxLen);


        return maxLength;
    }
}
