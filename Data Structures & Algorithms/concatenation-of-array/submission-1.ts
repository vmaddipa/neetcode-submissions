class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let result: number[] = [];
        const n = nums.length;
        for(let i=0; i< n; i++){
            result[i]=nums[i];
            result[i+n]=nums[i];
        }
        return result;

    }
}
