class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let currSum = 0;
        let maxSum = -Infinity;

        for(let num of nums){    
            currSum = Math.max(currSum, 0) + num;
            maxSum = Math.max(currSum, maxSum);
        }

        return maxSum;
    }
}
