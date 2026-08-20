class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0;
        let r = 1;
        let maxP = 0;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
                r = l + 1;
            } else {
                maxP = Math.max(prices[r] - prices[l], maxP);
                r++;
            }
        }
        return maxP;
    }
}
