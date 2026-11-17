class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const counts: number[] = [0, 0, 0];
        for(let num of nums){
            counts[num]++;
        }
        console.log(counts, 'counts');

        let i=0;
        for(let n=0; n<counts.length; n++){
            for(let j=0; j<counts[n]; j++){
                nums[i]=n;
                i++;
            }
        }
    }
}
