class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums);
        let lcs:number=0;
        for(let num of nums){
            if(set.has(num-1)){
                continue;
            } else {
                let seq = num;
                let len = 0;
                while(set.has(seq)){
                    len+=1;
                    seq+=1;
                }
               lcs = Math.max(lcs, len);
            }
            
        }
        return lcs;

    }
}
