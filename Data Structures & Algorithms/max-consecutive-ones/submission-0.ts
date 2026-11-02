class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let curr1s = 0;
        let max1s = 0;
        for(let num of nums){
            if(num === 1){
                curr1s+=1;
                max1s = Math.max(curr1s, max1s);
            } else if (num !== 1){
                curr1s = 0;
            }
        }
        return max1s;

    }
}
