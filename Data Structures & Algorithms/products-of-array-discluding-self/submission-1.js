class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let ans = new Array(n).fill(1);
        let prefixPro=1, sufixPro=1;

        for(let i =0; i<n; i++){
            ans[i] = prefixPro;
            prefixPro *= nums[i]
        }

        for(let i =n-1; i>=0; i--){
            ans[i] *= sufixPro;
            sufixPro *= nums[i]
        }

        return ans;

    }
}
