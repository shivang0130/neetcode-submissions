class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let maxProfitVal=0;
        for(let i=0; i<n-1; i++){
            for(let j=n-1; j>i; j--){
                let currProfit=prices[j]-prices[i];
                maxProfitVal = Math.max(maxProfitVal,currProfit);
            }
        }
        return maxProfitVal;

    }
}
