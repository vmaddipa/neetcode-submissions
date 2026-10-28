class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let binarySearch = (nums, left, right, target)=> {
            const mid = left + Math.floor((right-left)/2);
            if(left > right) return -1;

            if(nums[mid]===target){
                return mid;
            } else if ( nums[mid]> target){
                return binarySearch(nums, left, mid-1, target);
            }
            else if ( nums[mid]< target){
                return binarySearch(nums, mid+1, right, target);
            }
        }
        return binarySearch(nums, 0, nums.length-1, target);
    }
}
