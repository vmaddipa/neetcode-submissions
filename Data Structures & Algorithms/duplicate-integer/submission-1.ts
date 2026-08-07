class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueNumbers = new Set<number>(nums);
        if(uniqueNumbers.size === nums.length) return false;
        return true;
    }
}
