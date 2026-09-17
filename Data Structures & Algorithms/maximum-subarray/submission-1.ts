class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let currSum = 0;
        let maxSum = -Infinity;

        for(let i=0; i<nums.length; i++){    
            currSum = Math.max(currSum, 0) + nums[i];
            maxSum = Math.max(currSum, maxSum);
        }

        return maxSum;
    }
}
