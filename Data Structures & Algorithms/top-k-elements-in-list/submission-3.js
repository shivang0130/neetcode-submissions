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

        let bucket = new Array(arr.length + 1);
        let ans=[];

        for(let [key,val] of map){
            if(!bucket[val]){
                bucket[val]=[];
            }
            bucket[val].push(key);
        }

        for(let i = bucket.length - 1; i>=0; i--){
            if(bucket[i]){
                for(let num of bucket[i]){
                    if(ans.length < k){
                        ans.push(num)
                    }else{
                        return ans;
                    }
                }
                
            }
            if(ans.length === k){
                return ans;
            }
        }

        return ans;

    }
}
