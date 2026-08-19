class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res: number[][] = [];
        const sortedNum = nums.sort((a,b)=> a-b);
        for(let i=0; i<sortedNum.length; i++){
            if(sortedNum[i]>0) break;
            if(i>0 && sortedNum[i]===sortedNum[i-1]) continue;
            let left = i+1;
            let right = nums.length-1;
            while(left<right){
                const sum = sortedNum[i]+sortedNum[left]+sortedNum[right];
                if(sum===0){
                    res.push([sortedNum[i], sortedNum[left], sortedNum[right]]);
                    left++;
                    right--;
                    // Avoid duplicate choices for the second number
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Avoid duplicate choices for the third number
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < 0){
                    left++;
                } else {
                    right--;
                }
            }
            
        }
        return res;
        
    }
}
