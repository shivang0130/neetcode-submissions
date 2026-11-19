class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(arr, k) {

        let map = new Map();

        for(let ele of arr){
            if(map.has(ele)){
                map.set(ele,map.get(ele)+1)
            }else{
                map.set(ele,1);
            }
        }

        let ans=[];

        let sortedMap = [...map].sort((a,b) => b[1] - a[1]);

        for(let i=0; i<sortedMap.length && ans.length<k; i++){
            ans.push(sortedMap[i][0]);
        }


        return ans;

    }
}
