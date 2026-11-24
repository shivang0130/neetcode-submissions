class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let prefixPro = new Array(n).fill(1);
        let sufixPro = new Array(n).fill(1);
        let ans = new Array(n).fill(1);

        for(let i =1; i<n; i++){
            prefixPro[i] = nums[i-1] * prefixPro[i-1];
        }


        for(let i =n-2; i>=0; i--){
            sufixPro[i] = nums[i+1] * sufixPro[i+1];
        }

        for(let i = 0 ; i<n; i++){
            ans[i]=prefixPro[i]*sufixPro[i];
        }

        return ans;

    }
}
