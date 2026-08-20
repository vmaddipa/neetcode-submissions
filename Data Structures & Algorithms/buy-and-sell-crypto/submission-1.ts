class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = Infinity;
        let maxProfit = 0;

        for(let i=0; i<prices.length; i++){
            minPrice = Math.min(minPrice, prices[i]);
            maxProfit = Math.max(prices[i] - minPrice, maxProfit);
        }
        return maxProfit;

    }
}
