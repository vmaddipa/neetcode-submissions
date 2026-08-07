class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();
        for(let num of nums){
            countMap.set(num, (countMap.get(num) ?? 0)+1);
        }
        const entries = [...countMap.entries()].sort(([keyA, valA], [keyB, valB])=> valB - valA);
        return entries.map(([key, val])=> key).slice(0, k)
    }
}
