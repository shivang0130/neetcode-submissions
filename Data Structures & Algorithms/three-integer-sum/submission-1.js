class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length;
        let ans = [];
        
        nums.sort((a,b) => a-b);

        for(let i=0; i<n-2; i++){
            // Skip duplicate values for the first element
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = n - 1;

            while(left < right){
                let sum = nums[i] + nums[left] + nums[right];

                if(sum===0){
                    ans.push([nums[i],nums[left],nums[right]]);

                    // Skip duplicate values for left and right pointers
                    while(left < right && nums[left]===nums[left+1]) left++;
                    while(left < right && nums[right]===nums[right-1]) right--;

                    //Move both pointers 
                    left++;
                    right--;
                }else if(sum < 0){
                    // Sum is too small, move left pointer right to increase sum
                    left++;
                } else {
                    // Sum is too large, move right pointer left to decrease sum
                    right--;
                }
            }
        }

        return ans;
    }
}
