class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueNumbers = new Set<number>();
        for(let num of nums){
        if(uniqueNumbers.has(num)) return true;
        uniqueNumbers.add(num);
        }
        return false;
    }
}
