class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let maxProfitVal=0;
        let minBuyPrice= prices[0];
        for(let i=1; i<=n-1; i++){
           minBuyPrice = Math.min(minBuyPrice,prices[i]);
           let currProfit = prices[i] - minBuyPrice;
           maxProfitVal = Math.max(maxProfitVal,currProfit);
        }
        return maxProfitVal;

    }
}
