class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(arr, k) {

        let map = new Map();

        for(let ele of arr){
            map.set(ele, (map.get(ele) || 0) + 1)
        }

        let ans=[];

        for(let i=0; map.size > 0 && i < k; i++){
            let maxKey = null;
            let maxFreq = 0;

            for(let [key,val] of map){
                if(maxFreq<val){
                    maxKey=key;
                    maxFreq=val;
                }

                
            }
            ans.push(maxKey);
            map.delete(maxKey);
        }


        return ans;

    }
}
