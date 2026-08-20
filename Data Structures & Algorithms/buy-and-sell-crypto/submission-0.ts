class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = Infinity;
        let profit = 0;
        let maxProfit = 0;

        for(let i=0; i<prices.length; i++){
            minPrice = Math.min(minPrice, prices[i]);
            profit =  prices[i] - minPrice;
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;

    }
}
